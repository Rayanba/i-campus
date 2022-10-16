const allowedOrigins = require('./allowedOrigins');

// remove dev urls after development 
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) { // remove "|| !origin)" after development
            callback(null, true)

        }else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200 
}

module.exports = corsOptions;