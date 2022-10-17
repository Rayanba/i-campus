const User = require('../model/User');



const handleLogout = async (req, res) => {
    //******* On client, also delete the accessToken ****** */ 

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // 204 success but No content to send back 
    const refreshToken = cookies.jwt;
    
    //is refreshToken in DB?
    const foundUser = await User.findOne({refreshToken}).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
        return res.sendStatus(204); 
    }    

    // Delete refreshToken from DB
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', { httpOnly: true , sameSite: 'None', secure: true}); //***  add secure: true - only serves on https  */  // we also sent a maxAge option! maxAge: 24 * 60 * 60 *1000
    res.sendStatus(204);
}

module.exports = { handleLogout}