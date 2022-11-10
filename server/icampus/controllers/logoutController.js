const User = require('../model/User');



const handleLogout = async (req, res) => {
    //******* On client, also delete the accessToken ****** */ 

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // 204 success but No content to send back 
    const refreshToken = cookies.jwt;
    
    //is refreshToken in DB?, delete from cookie
    // const foundUser = await User.findOne({refreshToken}).exec();
    const [foundUser, _] = await User.findUserToken(refreshToken);
    const jsonFoundUser = foundUser[0]
    if (foundUser.length === 0) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
        return res.sendStatus(204); 
    }    

    try {
        let clearRefreshToken = ''
        await User.userUpdateRefresh(jsonFoundUser.username, clearRefreshToken );
        // console.log(`result: ${result[0]}`);
      } catch (err) {
        console.log(err)
        res.status(500).json({'message': err.message});
      }
    res.clearCookie('jwt', { httpOnly: true , sameSite: 'None', secure: true}); //***  add secure: true - only serves on https  */  // we also sent a maxAge option! maxAge: 24 * 60 * 60 *1000
    res.sendStatus(204);
}

module.exports = { handleLogout}