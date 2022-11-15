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

  socket.emit('myRoom', currentRooms);
  socket.emit('pong');
  // socket.emit('connect');
  

//////////////////////////////////////////////////////////////
/////////////////DISCONNECTION/////////////////////////////////
///////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////
///////////////// DISCONNECTION /////////////////////////////////
///////////////////////////////////////////////////////////////

  socket.on("join room", (roomName, cb) => {
    socket.join(roomName);
    cb(message[roomName]);
    console.log(socket.id)
  });


/////////////////////////////////////////////////////////////////////////// 
////////////////////////////// ADMIN //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

  socket.on("imAdmin", async ()  => {
    let adminRole = socket.roles
    if (adminRole.includes(5150)) {
      socket.join('Admino');


      //////////////////////////////////////////////
      ////////////////// UTILITIES /////////////////
      //////////////////////////////////////////////

      /////////// Upper Utilities///////////////
      const Utility = require('./model/Utility');
      const [utilities, ] = await Utility.findAll();
      // console.log(` utilities is :${utilities}`);
      let araay = [];

      for (let i = 0 ; i < parseInt(utilities.length) ; i++){
        // console.log(`all utilities are ${Object(utilities)[i]['name']}`);
        araay.push(Object(utilities)[i]['name']);
      }

      socket.emit("utilitiesLoad", araay);
      
      const Utilites = require('./controllers/utilityController')
      const result = await Utilites.getAllUtilities();
      socket.emit("upperUtilitiesLoad", result);

      ///////////  Lower Utilities //////////////
      let hi = 'hi'

      const [utilitiesReported, ] = await Utility.findReportedUtilities();
      // console.log(utilitiesReported)
      ///Bring Data
      socket.emit("lowerUtilitiesLoad", utilitiesReported);
      
      /////////////////////////////////////////////////
      ////////////////// Lectures /////////////////////
      /////////////////////////////////////////////////

      /////////// Upper Lectures ///////////////

      /////////ON Going/////////////
      const Course = require('./model/Course');
      const [OngoingCourses, ] = await Course.findOngoindClasses();
      // console.log(`ongoing ${OngoingCourses[0]['InProgress']}`);
      const [FinishedCourses, ] = await Course.findFinishedClasses();
      // console.log(`finished ${FinishedCourses[0]['Finished']}`);
      const [CommingCourses, ] = await Course.findCommingSoon();
      // console.log(`Comming ${CommingCourses[0]['commingSoon']}`);


      const [AllLectures, ] = await Course.findAllClasses();
      // console.log(`AllClasses/Courses ${AllLectures[1]['CRN']}`);
      // console.log(`AllClasses/Courses ${AllLectures[1]['name']}`);
      // console.log(`AllClasses/Courses ${AllLectures[1]['StartTime']}`);
      // console.log(`AllClasses/Courses ${AllLectures[1]['EndTime']}`);
      // console.log(`AllClasses/Courses ${AllLectures[1]['Room']}`);
      // console.log(`AllClasses/Courses ${AllLectures[1]['instructor']}`);
      socket.emit("lowerLecturesLoad", AllLectures);
      
      if (OngoingCourses[0] !== undefined){
        socket.emit("upperLecturesLoadOnGo", OngoingCourses[0]['InProgress']);
      }else{
        socket.emit("upperLecturesLoadOnGo", 0) ///
      }
      if (FinishedCourses[0] !== undefined){
        socket.emit("upperLecturesLoadFin", FinishedCourses[0]['Finished']);
      }else{
        socket.emit("upperLecturesLoadFin", 0) ///
      }
      if (CommingCourses[0] !== undefined){
        socket.emit("upperLecturesLoadCom", CommingCourses[0]['commingSoon']);
      }else{
        socket.emit("upperLecturesLoadCom", 0) ///
      }
      /////////ON Going/////////////


      /////////// Lower Lectures ///////////////
      


      ////////////////////////////////////////////////
      ////////////////// Facilities //////////////////
      ////////////////////////////////////////////////

      /////////// Upper Facilites ///////////////

      const Facilities = require('./model/Facility');
      const [facilitiesbusy,] = await Facilities.findBusyFacility();
      const [facilitiesav,] = await Facilities.findAvailableFacility();
      const [facilitiesout,] = await Facilities.findOutFacility();
      // console.log(facilitiesbusy[0]['Busys'], facilitiesout[0]['outservice'], facilitiesav[0]["Available"]);
      
      const upperFacilities = [facilitiesbusy[0]['Busys'],facilitiesout[0]['outservice'],facilitiesav[0]["Available"]]
      // console.log(upperFacilities)
      socket.emit("upperFacilitiesLoad", upperFacilities);
      


      /////////// Lower Facilites ///////////////

      const [faciliiesbusy,] = await Facilities.findAllFacilitiesRooms();
      // console.log(faciliiesbusy)
      
      socket.emit("lowerFacilitiesLoad", faciliiesbusy);
      const [faciliiesbusysecFloor,] = await Facilities.findAllFacilitiesRoomsSecFloor();
      // console.log(faciliiesbusysecFloor) 
      socket.emit("lowerFacilitiesLoadSec", faciliiesbusysecFloor);



      ////////////////////////////////////////////////
      ////////////////// Attendance //////////////////
      ////////////////////////////////////////////////

      /////////// Upper Attendance ///////////////
      const Attendance = require('./model/Attendance');
      const [studenetAtten,] = await Attendance.findStdnAttend();
      const [instructorAtten,] = await Attendance.findInstAttend();
      // console.log(studenetAtten[0]['AttendStudent'], instructorAtten[0]['AttendInstructor'])
      const upperAttendance = [studenetAtten[0]['AttendStudent'], instructorAtten[0]['AttendInstructor']]
      socket.emit("upperAttendanceLoad", upperAttendance);
      /////////// Lower Attendance ///////////////

      const [crnWithStudentNum, ] = await Attendance.findCrnStdAttendace();
      // console.log(crnWithStudentNum)
      socket.emit("lowerAttendanceLoad", crnWithStudentNum);




      ////////////////////////////////////////////////
      ////////////////// Student /////////////////////
      ////////////////////////////////////////////////

      /////////// Upper Students ///////////////
      const UsersIn = require('./model/User');
      const [InstInBuilding,] = await UsersIn.findInstInBuilding();
      const [InstInRoom,] = await UsersIn.findInstInRoom();

      const [studentInBuilding,] = await UsersIn.findStudInBuilding();
      const [studentInRoom,] = await UsersIn.findStudInRoom();

      const [EmpInBuilding,] = await UsersIn.findEmptInBuilding();

      // console.log(InstInBuilding[0],InstInRoom[0]);
      // console.log(studentInBuilding[0],studentInRoom[0]);
      // console.log(EmpInBuilding[0]);

      const UpperInstAttendance = [InstInBuilding[0],InstInRoom[0]]
      const UpperstudentAttendance = [studentInBuilding[0],studentInRoom[0]]
      const UpperEmpAttendance = [EmpInBuilding[0]]
      

      socket.emit("upperStudentsLoad", UpperstudentAttendance);
      socket.emit("upperInstructorsLoad", UpperInstAttendance);
      socket.emit("upperEmployeesLoad", UpperEmpAttendance);


      /////////// Lower Students ///////////////
      const [StudInfoInBuilding,] = await UsersIn.findStudInfoInBuilding();
      
      socket.emit("lowerStudentsLoad", StudInfoInBuilding);
      
      
      ////////////////////////////////////////////////
      ////////////////// Instructor //////////////////
      ////////////////////////////////////////////////
      
      /////////// Upper Instructor ///////////////
      /////////// Lower Instructor ///////////////
      const [InsInfoInBuilding,] = await UsersIn.findInstInfoInBuilding();
      socket.emit("lowerInstructorsLoad", InsInfoInBuilding);
      
      ////////////////////////////////////////////////
      ////////////////// Employees ///////////////////
      ////////////////////////////////////////////////
      
      /////////// Upper Employees ///////////////
      /////////// Lower Employees ///////////////
      const [EmpInfoInBuilding,] = await UsersIn.findEmpInfoInBuilding();
      socket.emit("lowerEmployeesLoad", EmpInfoInBuilding);


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




















/////////////////////////////////////////////////////////////////////////// 
////////////////////////////// Instructor /////////////////////////////////
///////////////////////////////////////////////////////////////////////////
  socket.on("imInst",  async ()  => {

    let adminRole = socket.roles
    let id = socket.id;
    console.log(`id is ${id}`)
      if (adminRole.includes(1984)) {
        socket.join('instructorRoom');
        //this should be from Courses 
      const Utility = require('./model/Utility');
      const [CourseName, _] = await Utility.OngoingCourse_Instrctor(id);
          
      if (CourseName[0] !== undefined){
        socket.emit('roomName', CourseName[0]['name'])
        
      }else{
        socket.emit('roomName', 'No Class')
      }
      // console.log(CourseName[0]['name']);
      //// bring data 





      const Courses = require('./model/Course');
      const [MyCourses, ] = await Courses.findMyClassesToday(id);
      // console.log(MyCourses)
      if (MyCourses !== undefined){
        socket.emit('todayLectures', MyCourses)

      }else{
        socket.emit('todayLectures', [{'CRN':'n'}, {'name': 'n'},{'StartTime': 'n'} , {'EndTime': 'n'}, {'Room': 'n'}])
        
      }
      



      const Attendance = require('./model/Attendance');
      const [AttendStudents, ] = await Attendance.findNowClassAttendance();
      console.log(`Attend Student ${AttendStudents}`);
      socket.emit("AttendStudents", AttendStudents )
      

      const Facilities = require('./model/Facility');
      const [faciliiesbusy,] = await Facilities.findAllFacilitiesRooms();
      // console.log(faciliiesbusy)
      const [faciliiesbusysecFloor,] = await Facilities.findAllFacilitiesRoomsSecFloor();
      // console.log(faciliiesbusysecFloor)
      
      socket.emit('floorOne', faciliiesbusy)
      socket.emit('floorTwo', faciliiesbusysecFloor)

      const [facilitiesbusy,] = await Facilities.findBusyFacility();
      const [facilitiesav,] = await Facilities.findAvailableFacility();
      const [facilitiesout,] = await Facilities.findOutFacility();
      // console.log(facilitiesbusy[0]['Busys'], facilitiesout[0]['outservice'], facilitiesav[0]["Available"]);
          
      const upperFacilities = [facilitiesbusy[0]['Busys'],facilitiesout[0]['outservice'],facilitiesav[0]["Available"]]
      // console.log(upperFacilities)
      socket.emit("insPieChart", upperFacilities);


    }else{
      socket.emit("unAuthorized")
    }

    



  });

///////////////////////////////////////////////////////////
/////////////////// STUENT ////////////////////////////////
///////////////////////////////////////////////////////////

  socket.on("imStudent",  async ()  => {
    let id = socket.id;
    let adminRole = socket.roles

      if (adminRole.includes(2001)) {
        socket.join("studentRoom");
        const Courses = require('./model/Course');
        const [MyCourses, ] = await Courses.findMyClassesToday(id);
        // console.log(MyCourses)

        socket.emit('todayLecturesStud', MyCourses)







      }else{
        socket.emit("unAuthorized")
      }
  });
















///////////////////////////////////////////////////////////
/////////////////// General ////////////////////////////////
///////////////////////////////////////////////////////////


//socket should have (admin or instructor or student)
  // socket.on("reportUtility", (utilityInfo) => {
  //   console.log(utilityInfo);
      
  // });




////////NOTIFICATION/////////only access by manager/////////////////////
    // socket.on("notification", (toUser, inRoom) => {
    //   console.log(`socket id: ${toUser , inRoom} Joined join`);
        
    // })






    // ////////////////////////// JOIN-AUTH /////////////////////////////////////////
    // socket.on("joins", (place) => {
    //   console.log(place);
    //   socket.emit("gotit", place);
    // });

    // ////////////////////////////// BUILDING //////////////////////////////////////
    // socket.on("Enterance", (number) => {
    //   console.log("on student:", number );

      
    // });
    
    // ////////////////////////////// FACILITY //////////////////////////////////////
    // socket.on("facilities", (facilityName, )=> {
    //   console.log("on student:", facilityName );

    // });

    // /////////// MY LECTURES //////////SHOULD BE AyUTO ////////////////////////////
    // socket.on("mylectures", (course, roomNum) =>{
    //   console.log("on student:", course, roomNum );

    // });

    // /////////// MY LECTURES //////////SHOULD BE AyUTO ////////////////////////////
    // socket.on("Alllectures", (course, roomNum) =>{
    //   console.log("on student:", course, roomNum );

    // });

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
















