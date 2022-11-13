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

const PORT = process.env.PORT || 3500; 


// set express with http
const server = http.createServer(app);

// socket io init




// MIDDLEWARES
// custom middleware loggers 
app.use(logger);

// handle options credentials check - BEFORE CORS! and fetch cookies credentials requirement
app.use(credentials);
//////////// we need the helment();
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
app.use('/registeration', require('./routes/userRegi'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));




// verifying start from here 
app.use(verifyJWT);
// io.use ();



// io.use(wrap(verifyJWT));

// app.use('/employees', require('./routes/api/employees'));
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

///////////////////////////////////////////////////////////////////
/////////////////////SOCKET-IO INIT/////////////////////////
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000","http://192,168.100.179:3000", "https://admin.socket.io"],
        methods: ["GET", "POST"],
        credentials: true,
    }
});
/////////////////////////SOCKET-IO ADMIN//////////////////////////////////////////

instrument(io, {
    auth: false
  });



/////////////////////////////////////////////////////////////////
/////////////////////SOCKET-IO GENERAL Middleware /////////////////////////
io.use( async (socket, next) =>{
    // console.log(socket.handshake.headers.cookie);
    if(!socket.handshake.headers.cookie) return next(new Error("No Token"));
    const jjwt = socket.handshake.headers.cookie.slice(4);
    //  const jjwt = ''
    const jsonCookies = {jjwt};
    // console.log(jsonCookies)
    
    if (!jsonCookies?.jjwt) {
        // console.log('noo')
        return next(new Error("No Token"));
    }
    const User = require('./model/User');
    const refreshToken = jsonCookies.jjwt;
    const [foundUser, _] = await User.findUserToken(refreshToken);
    let jsonFoundUser = foundUser[0]
    if (foundUser.length === 0) return next(new Error("No Token"));
    const jwt = require('jsonwebtoken');
    jwt.verify(
        refreshToken, 
        process.env.REFRESH_TOKEN_SECRET, 
        (err, decoded) => {
          if (err || foundUser.username !== decoded.username) next(new Error("No Token"))
          const roles = jsonFoundUser.roles;
          // console.log(roles)
          socket.id = jsonFoundUser.username;
          
          socket.roles= roles;
          // console.log(socket.client);
        }
    );
    next()
});
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////GENERAL NAME SPACE///////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
let users = [];
const message = {
  general:[],
  random: [],
  jokes: [], 
  javascript:[]
}

//  socket connections ./ 
io.on("connection", socket => {
  console.log(socket.rooms)
  let [currentRooms,] = socket.rooms;

  io.emit('myRoom', currentRooms);
  socket.emit('pong');
  /// send username to all connected users
  socket.on("join server", (username) => {
    const user = {username};
    users.push(user);
    io.emit("new user", users);
  });
  // handle join room 
  socket.on("join room", (roomName, cb) => {
    socket.join(roomName);
    cb(message[roomName]);
    console.log(socket.id)
  });
  
////////////////////////////// ADMIN //////////////////////////////////////
  socket.on("imAdmin", async ()  => {
    let adminRole = socket.roles
    if (adminRole.includes(5150)) {
      socket.join('Admino');


      //////////////////////////////////////////////
      ////////////////// UTILITIES /////////////////
      //////////////////////////////////////////////

      /////////// Upper Utilities///////////////
      const Utility = require('./model/Utility');
      const [utilities, _] = await Utility.findAll();
      let araay = [];
      for (let i = 0 ; i < parseInt(utilities.length) ; i++){
        // console.log(Object(utilities)[i]['name'])
        araay.push(Object(utilities)[i]['name']);
      }
      socket.emit("utilitiesLoad", araay);
      const Utilites = require('./controllers/utilityController')
      const result = await Utilites.getAllUtilities();
      socket.emit("upperUtilitiesLoad", result);
      console.log(result);
      // console.log(Object(result));

      ///////////  Lower Utilities //////////////
      let hi = 'hi'
      ///Bring Data
      socket.emit("lowerUtilitiesLoad", hi);
      
      /////////////////////////////////////////////////
      ////////////////// Lectures /////////////////////
      /////////////////////////////////////////////////

      /////////// Upper Lectures ///////////////
      socket.emit("upperLecturesLoad", hi);


      /////////// Lower Lectures ///////////////
      socket.emit("lowerLecturesLoad", hi);

      

      ////////////////////////////////////////////////
      ////////////////// Facilities //////////////////
      ////////////////////////////////////////////////

      /////////// Upper Facilites ///////////////
      socket.emit("upperFacilitiesLoad", hi);
      /////////// Upper Facilites ///////////////
      socket.emit("lowerFacilitiesLoad", hi);


      ////////////////////////////////////////////////
      ////////////////// Attendance //////////////////
      ////////////////////////////////////////////////

      /////////// Upper Attendance ///////////////
      socket.emit("upperAttendanceLoad", hi);
      /////////// Lower Attendance ///////////////
      socket.emit("lowerAttendanceLoad", hi);


      ////////////////////////////////////////////////
      ////////////////// Student /////////////////////
      ////////////////////////////////////////////////

      /////////// Upper Students ///////////////
      socket.emit("upperStudentsLoad", hi);
      /////////// Lower Students ///////////////
      socket.emit("lowerStudentsLoad", hi);


      ////////////////////////////////////////////////
      ////////////////// Instructor //////////////////
      ////////////////////////////////////////////////

      /////////// Upper Instructor ///////////////
      socket.emit("upperInstructorsLoad", hi);
      /////////// Lower Instructor ///////////////
      socket.emit("lowerInstructorsLoad", hi);

      ////////////////////////////////////////////////
      ////////////////// Employees ///////////////////
      ////////////////////////////////////////////////

      /////////// Upper Employees ///////////////
      socket.emit("upperEmployeesLoad", hi);
      /////////// Lower Employees ///////////////
      socket.emit("lowerEmployeesLoad", hi);


      ////////////////////////////////////////////////
      ////////////////// Reports ///////////////////
      ////////////////////////////////////////////////

      /////////// Upper Reports ///////////////
      socket.emit("upperReportsLoad", hi);
      /////////// Lower Reports ///////////////
      socket.emit("lowerReportsLoad", hi);













    }else{
      socket.emit("unAuthorized")
    }
  });


  // socket.on("imAdmi", async () => {
    
  //   socket.emit("facilityInfo")

  // }) 


























  //////////////////////////////////////////////////////////////////////////////
  socket.on("inst",  ()  => {
    let adminRole = socket.roles
    if (adminRole.includes(5150)) {
     socket.join('Admino')
      
      console.log(true)
      console.log(socket.rooms)
    }else{
      socket.emit("unAuthorized")
    }
    
  });


 socket.on("imInst",  async (msg)  => {

  let adminRole = socket.roles
    if (adminRole.includes(1984)) {
      socket.join('instructorRoom');

  const Utility = require('./model/Utility');
  const [CourseName, _] = await Utility.OngoingCourse_Instrctor(msg);
  
  console.log(CourseName[0]['name']);

  //// bring data 
    socket.emit('roomName', CourseName[0]['name'])
    }
  });

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////STUENT JOIN////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

  socket.on("imStudent",  async (msg)  => {

    let adminRole = socket.roles
      if (adminRole.includes(2001)) {
        socket.join("studentRoom");
        
      }
    });


//////////////////////////REPORT//////////////////////////////
  socket.on("reportUtility", (utilityInfo) => {
    console.log(utilityInfo);
      
  });




//////////////////////////NOTIFICATION/////////only access by manager/////////////////////
    socket.on("notification", (toUser, inRoom) => {
      console.log(`socket id: ${toUser , inRoom} Joined join`);
        
    })


//////////////////////////DISCONNECTION//////////////////////////////
    socket.on("disconnecting", () => {
      console.log(`${socket.id} loged off`); // the Set contains at least the socket ID
    });

    socket.on("disconnect", (reason) => {
        console.log(reason);
        for (const room of socket.rooms){
            if (room !== socket.id){
                socket.to(room).emit("user has left", socket.id);
            }
        }
    });





////////////////////////// JOIN-AUTH ////////////////////////////
    socket.on("joins", (place) => {
      console.log(place);
      socket.emit("gotit", place);
    });

    ////////////////////////////// BUILDING //////////////////////////////////////
    socket.on("Enterance", (number) => {
      console.log("on student:", number );

      
    });
    
    ////////////////////////////// FACILITY //////////////////////////////////////
    socket.on("facilities", (facilityName, )=> {
      console.log("on student:", facilityName );

    });

    /////////// MY LECTURES //////////SHOULD BE AyUTO ////////////////////////////
    socket.on("mylectures", (course, roomNum) =>{
      console.log("on student:", course, roomNum );

    });

    /////////// MY LECTURES //////////SHOULD BE AyUTO ////////////////////////////
    socket.on("Alllectures", (course, roomNum) =>{
      console.log("on student:", course, roomNum );

    });

});













// /////////////////////////////////////////////////////////////////
// /////////////////////SOCKET-IO Student Middleware ///////////////

// io.of("/students").use( async(socket, next) =>{
//     const jjwt = socket.handshake.headers.cookie.slice(4);
//     console.log(socket.handshake.auth)

//     const jsonCookies = {jjwt};
//     if (!jsonCookies?.jjwt) {
//         console.log('noo')
//         return next(new Error("No Token"))
//     }
//     const User = require('./model/User')
//     const refreshToken = jsonCookies.jjwt;
//     const [foundUser, _] = await User.findUserToken(refreshToken);
//     const jsonFoundUser = foundUser[0]
//     console.log(jsonFoundUser)
//     if (!jsonFoundUser.roles.includes(1984)) return next(new Error("No Token"))
//     if (foundUser.length === 0) return next(new Error("No Token"))
//     const jwt = require('jsonwebtoken');
//     jwt.verify(
//         refreshToken, 
//         process.env.REFRESH_TOKEN_SECRET, 
//         (err, decoded) => {
//           if (err || foundUser.username !== decoded.username) next(new Error("No Token"))
//           const roles = jsonFoundUser.roles;
//           console.log(roles.length)
//           const accessToken = jwt.sign(
//             {
//               "UserInfo":{
//                 "username": decoded.username,
//                 "roles": roles
//               }
//             },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: '10s' }
//           );
//           socket.id = jsonFoundUser.username;
//           socket.auth= accessToken;
//         }
//     )
//     // console.log(socket.handshake)
//     // next(new Error("can't go further "))
//     // console.log(socket.handshake)
//     next()
// });

// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////STUDENT NAMESPACE//////////////////////////////////
// io.of("/students").on("connection", (socket) => {
    
//     socket.on("Report", socket => {
//       console.log(`socket id: ${socket.id} Joined join`);
//   });

//   socket.on("notification", socket => {
//       console.log(`socket id: ${socket.id} Joined join`);
      
//   })

//   socket.on('ping', socket => {
//       console.log(`socket id: ${socket.id} pong`);
//       socket.emit('pong')
//       console.log("pong recieved")
//   });

//   socket.on("disconnect", (reason) => {
//       console.log(reason);
//       for (const room of socket.rooms){
//           if (room !== socket.id){
//               socket.to(room).emit("user has left", socket.id);
//           }
//       }
//   });
// });


















// /////////////////////////////////////////////////////////////////
// /////////////////////SOCKET-IO INSTRUCTORS Middleware /////////////////////////

// io.of("/instructors").use( async(socket, next) =>{
//   const jjwt = socket.handshake.headers.cookie.slice(4);
//   console.log(socket.handshake.auth)

//   const jsonCookies = {jjwt};
//   if (!jsonCookies?.jjwt) {
//       console.log('noo')
//       return next(new Error("No Token"))
//   }
//   const User = require('./model/User')
//   const refreshToken = jsonCookies.jjwt;
//   const [foundUser, _] = await User.findUserToken(refreshToken);
//   const jsonFoundUser = foundUser[0]
//   console.log(jsonFoundUser)
//   if (!jsonFoundUser.roles.includes(1984)) return next(new Error("No Token"))
//   if (foundUser.length === 0) return next(new Error("No Token"))
//   const jwt = require('jsonwebtoken');
//   jwt.verify(
//       refreshToken, 
//       process.env.REFRESH_TOKEN_SECRET, 
//       (err, decoded) => {
//         if (err || foundUser.username !== decoded.username) next(new Error("No Token"))
//         const roles = jsonFoundUser.roles;
//         console.log(roles.length)
//         const accessToken = jwt.sign(
//           {
//             "UserInfo":{
//               "username": decoded.username,
//               "roles": roles
//             }
//           },
//           process.env.ACCESS_TOKEN_SECRET,
//           { expiresIn: '10s' }
//         );
//         socket.id = jsonFoundUser.username;
//         socket.auth= accessToken;
//       }
//     )
//     // console.log(socket.handshake)
//     // next(new Error("can't go further "))
//     // console.log(socket.handshake)
//     next()
// });
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////INSTRUCTOR NAMESPACE//////////////////////////////////

// io.of("/instructors").on("connection", (socket) => {
//   socket.on("Report", socket => {
//     console.log(`socket id: ${socket.id} Joined join`);
//   });

//   socket.on("notification", socket => {
//     console.log(`socket id: ${socket.id} Joined join`);
    
//   })

//   socket.on('ping', socket => {
//     console.log(`socket id: ${socket.id} pong`);
//     socket.emit('pong')
//     console.log("pong recieved")
//   });

//   socket.on("disconnect", (reason) => {
//     console.log(reason);
//     for (const room of socket.rooms){
//         if (room !== socket.id){
//             socket.to(room).emit("user has left", socket.id);
//         }
//     }
//   });
// });





// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////Building Gate Dynmic NAMESPACE//////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////





// /////////////////////////////////////////////////////////////////
// /////////////////////SOCKET-IO COURSE Middleware /////////////////////////

// io.of("/courses").use( async(socket, next) =>{
//     const jjwt = socket.handshake.headers.cookie.slice(4);
//     console.log(socket.handshake.auth)

//     const jsonCookies = {jjwt};
//     if (!jsonCookies?.jjwt) {
//         console.log('noo')
//         return next(new Error("No Token"))
//     }
//     const User = require('./model/User')
//     const refreshToken = jsonCookies.jjwt;
//     const [foundUser, _] = await User.findUserToken(refreshToken);
//     const jsonFoundUser = foundUser[0]
//     console.log(jsonFoundUser)
//     if (!jsonFoundUser.roles.includes(1984)) return next(new Error("No Token"))
//     if (foundUser.length === 0) return next(new Error("No Token"))
//     const jwt = require('jsonwebtoken');
//     jwt.verify(
//         refreshToken, 
//         process.env.REFRESH_TOKEN_SECRET, 
//         (err, decoded) => {
//           if (err || foundUser.username !== decoded.username) next(new Error("No Token"))
//           const roles = jsonFoundUser.roles;
//           console.log(roles.length)
//           const accessToken = jwt.sign(
//             {
//               "UserInfo":{
//                 "username": decoded.username,
//                 "roles": roles
//               }
//             },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: '10s' }
//           );
//           socket.id = jsonFoundUser.username;
//           socket.auth= accessToken;
//         }
//     )
//     // console.log(socket.handshake)
//     // next(new Error("can't go further "))
//     // console.log(socket.handshake)
//     next()
// });
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////STUDENT NAMESPACE//////////////////////////////////

// io.of("/courses").on("connection", (socket) => {
    
//     console.log(`connected to root : ${socket.id}`);

//     socket.emit("welcome", "hello from the other side");
//     console.log(`socket id connected to /root: ${socket.id}`);
// });





















// /////////////////////////////////////////////////////////////////
// /////////////////////SOCKET-IO ROOT Middleware /////////////////////////

// io.of("/root").use( async(socket, next) =>{
//     const jjwt = socket.handshake.headers.cookie.slice(4);
//     console.log(socket.handshake.auth)

//     const jsonCookies = {jjwt};
//     if (!jsonCookies?.jjwt) {
//         console.log('noo')
//         return next(new Error("No Token"))
//     }
//     const User = require('./model/User')
//     const refreshToken = jsonCookies.jjwt;
//     const [foundUser, _] = await User.findUserToken(refreshToken);
//     const jsonFoundUser = foundUser[0]
//     console.log(jsonFoundUser)
//     if (!jsonFoundUser.roles.includes(5150)) return next(new Error("No Token"))
//     if (foundUser.length === 0) return next(new Error("No Token"))
//     const jwt = require('jsonwebtoken');
//     jwt.verify(
//         refreshToken, 
//         process.env.REFRESH_TOKEN_SECRET, 
//         (err, decoded) => {
//           if (err || foundUser.username !== decoded.username) next(new Error("No Token"))
//           const roles = jsonFoundUser.roles;
//           console.log(roles.length)
//           const accessToken = jwt.sign(
//             {
//               "UserInfo":{
//                 "username": decoded.username,
//                 "roles": roles
//               }
//             },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: '10s' }
//           );
//           socket.id = jsonFoundUser.username;
//           socket.auth= accessToken;
//         }
//     )
//     // console.log(socket.handshake)
//     // next(new Error("can't go further "))
//     // console.log(socket.handshake)
//     next()
// });
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////ROOT NAMESPACE///////////////////////////
// io.of("/root").on("connection", (socket) => {
    
//     console.log(`connected to root : ${socket.id}`);

//     socket.emit("welcome", "hello from the other side");
//     console.log(`socket id connected to /root: ${socket.id}`);
// });








server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
















