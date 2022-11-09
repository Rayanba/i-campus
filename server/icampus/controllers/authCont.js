require('dotenv').config();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {
  const {username, pwd } = req.body;
  if (!username || !pwd) return res.status(400).json({'message': 'Username and password are required.'});

  const [foundUser, _] = await User.findOneUser(username);
  console.log(foundUser)

  if (foundUser.length === 0) return res.sendStatus(401);

  const jsonFoundUser = foundUser[0];
  console.log(jsonFoundUser.pwd);

  const match = await bcrypt.compare(pwd, jsonFoundUser.pwd);
  console.log(match);

  if(!match) return res.sendStatus(401)
    console.log(match)

    const roles =jsonFoundUser.roles;
    console.log(roles)
    const accessToken = jwt.sign(
      {
        "UserInfo":{
          "username": foundUser.username,
          "roles": roles
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '10s' }

    );
    const refreshToken = jwt.sign(
      { "username": foundUser.username},
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d'}
    );

   // Saving refreshToken with Current user

    try {
      await User.userUpdateRefresh(jsonFoundUser.username, refreshToken );
      // console.log(`result: ${result[0]}`);
    } catch (err) {
      console.log(err)
      res.status(500).json({'message': err.message});
    }
    // Creates Secure Cookie with refresh token
    res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

    // Send authorization roles and access token to user
    res.json({ roles, accessToken })
}

  module.exports = { handleLogin };