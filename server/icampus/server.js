require('dotenv').config();
const express = require('express');
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const http = require('http');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const {verifyJWT} = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
// const mongoose = require('mongoose');
// const connectDB = require('./config/dbConn');
// const pool = require('./config/dbConn');
const PORT = process.env.PORT || 3500; 

// connect to MongoDB
// connectDB();
// pool();

// set express with http
const server = http.createServer(app);

// socket io init
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://admin.socket.io"],
        methods: ["GET", "POST"],
        credentials: true,
    }
});

instrument(io, {
    auth: false
  });
  


// MIDDLEWARES
// custom middleware loggers 
app.use(logger);

// handle options credentials check - BEFORE CORS! and fetch cookies credentials requirement
app.use(credentials);

// third party middleware //Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middelware to handle urlencoded data (form data) 
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// built-in middleware for cookies
app.use(cookieParser());

// built-in middleware static files 
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
// unverified

app.use('/', require('./routes/root'));
// app.use('/register', require('./routes/register'));
app.use('/registeration', require('./routes/userRegi'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use('/utility', require('./routes/api/utilities'));



// verifying start from here 
app.use(verifyJWT);

io.on("connect", socket => {
    console.log(`socket id is: ${socket.id}`);
    socket.on("join", socket => {
        console.log(`socket id is: ${socket.id}`);
        
    })
})
// io.use(wrap(verifyJWT));

app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname,'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({error: "404 Not Found"});
    }else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);


// const call = async () =>{

//     const [rows] = await pool.query("SELECT * FROM Users");
//     console.log(rows);
//     return rows;
// }

// call();

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));















