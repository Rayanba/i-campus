const jwt = require('jsonwebtoken');
const { Socket } = require('socket.io');

const verifyJWT = (req, res, next) => {
    // some times it's authorization and sometimes it's Authorization
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);// unauthorized
    
    const token = authHeader.split(' ')[1];
    console.log(`from verifyJWT: ${token}`)
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}
const wrap = expresMiddleware => (Socket, next) => expresMiddleware(Socket.request, {}, next);
module.exports = {verifyJWT, wrap};