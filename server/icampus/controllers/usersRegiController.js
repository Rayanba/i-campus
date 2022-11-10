const User = require('../model/User')
const bcrypt = require('bcrypt');


const handleNewUser = async (req, res) => {
  const {username, pwd} = req.body;
  if (!username || !pwd)  return res.status(400).json({'message': 'username and password are required.'});
  try {
    let {username, pwd, email, first_name, last_name, phone_number, roles} = req.body;
    let hashedPwd = await bcrypt.hash(pwd, 10);
    let user = new User(username, hashedPwd, email, first_name, last_name, phone_number, roles);
    user = await user.save();
    console.log(user);
    res.status(201).json({'success': `New user ${username} created.`});
  } catch (err) {
    res.status(500).json({'message': err.message});  
    console.log(err);
  }
}

module.exports = {handleNewUser};