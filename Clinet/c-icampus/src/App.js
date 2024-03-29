import { Routes, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import Instructor from './components/Instructor/Instructor';
import Student from './components/student/Student';
import Missing from './components/Missing';
import Unauthorized from './components/unauthorized/Unauthorized';
import RequireAuth from './components/RequireAuth';
import PresistLogin from './components/PersistLogin';
import Dashboard from './components/pages/admin/dashboard/Dashboard';
import Schedule from './components/pages/sharedpages/schedule/Schedule';
import Scan from './components/pages/sharedpages/scan/Scan';
import InstHome from './components/pages/instructor/InstHome';
import { 
  AttendanceCardLower,
  EmployeesCardLower, 
  InstructorsCardLower, 
  LecturesCardLower, 
  UtilitiesCardLower, 
  StudentsCardLower, 
  FacilitiesCardLower
}
from './components/pages/admin/dashboard/index'
import Messages from './components/pages/admin/messages/Messages';
import Reports from './components/pages/admin/reports/Reports';
import MyQR from './components/pages/sharedpages/myQR/MyQR';
import StudentHome from './components/pages/student/StudentHome';
import TheGate from './components/theGate/TheGate';
import Scans from './components/student/Scans';


const ROLES = {
  'Student': 2001,
  'Instructor': 1984,
  'Admin': 5150,
  'Gate': 1000
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={< Home />} />
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/*  Protected Routes */}
        <Route element={<PresistLogin/>}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}> 
            <Route path="admin" element={<Admin />} >
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="attendance" element={<AttendanceCardLower/>} />
                <Route path="employees" element={<EmployeesCardLower/>} />
                <Route path="instructors" element={<InstructorsCardLower/>} />
                <Route path="lectures" element={<LecturesCardLower/>} />
                <Route path="utilities" element={<UtilitiesCardLower/>} />
                <Route path="students" element={<StudentsCardLower/>} />
                <Route path="facilities" element={<FacilitiesCardLower/>} />
              </Route>
                <Route path="messages" element={<Messages />} />
                <Route path="Reports" element={<Reports />} />
                <Route path="my-qr" element={<MyQR/>} />
                <Route path="Scan" element={<Scan/>} />
            </Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Instructor]} />} >
            <Route path="instructor" element={<Instructor />} >
              <Route path="schedule" element={<Schedule/>} />
              <Route path="home" element={<InstHome/>} />
              <Route path="my-qr" element={<MyQR/>} />
              <Route path="Scan" element={<Scan/>} />
            </Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
            <Route path="student" element={<Student />} >
              <Route path="schedule" element={<Schedule/>} />
              <Route path="home" element={<StudentHome/>} />
              <Route path="my-qr" element={<MyQR/>} />
              <Route path="Scan" element={<Scans/>} />
            </Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Gate]} />}>
            <Route path="/Gate" element={< TheGate />} />
          </Route>
        </Route>
        {/* catch Everything Else */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;