const User = require('../model/User');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  console.log(cookies)
  const refreshToken = cookies.jwt;

  const [foundUser, _] = await User.findUserToken(refreshToken);
  const jsonFoundUser = foundUser[0];
  if (foundUser.length === 0) return res.sendStatus(401);
  // evaluate jwt 
  jwt.verify(
    refreshToken, 
    process.env.REFRESH_TOKEN_SECRET, 
    (err, decoded) => {
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
      const roles = jsonFoundUser.roles;
      const accessToken = jwt.sign(
        {
          "UserInfo":{
            "username": decoded.username,
            "roles": roles
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '10s' }
      );
      res.json({roles, accessToken});
      // console.log('here is at',accessToken);
      // console.log('here is rt',refreshToken);
    }
  )
}
module.exports= {handleRefreshToken}