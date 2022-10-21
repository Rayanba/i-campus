import { Routes, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Admin from './components/admin/Admin';
import Instructor from './components/Instructor/Instructor';
import Student from './components/student/Student';
import Missing from './components/Missing';
import Unauthorized from './components/unauthorized/Unauthorized';
import RequireAuth from './components/RequireAuth';
import PresistLogin from './components/PersistLogin';
import Dashboard from './components/pages/admin/dashboard/Dashboard';
import { 
  AttendanceCardLower,
  EmployeesCardLower, 
  InstructorsCardLower, 
  LecturesCardLower, 
  RoomsCardLower, 
  StudentsCardLower, 
  FacilitiesCardLower
} from './components/pages/admin/dashboard/index'
import Privileges from './components/pages/admin/privileges/Privileges';
import Reports from './components/pages/admin/reports/Reports';


const ROLES = {
  'Student': 2001,
  'Instructor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={< Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/*  protected routes */}
        <Route element={<PresistLogin/>}>
        {/* element={<RequireAuth allowedRoles={[ROLES.Admin]} />} */}
          <Route > 
            <Route path="admin" element={<Admin />} >
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="attendance" element={<AttendanceCardLower/>} />
                <Route path="employees" element={<EmployeesCardLower/>} />
                <Route path="instructors" element={<InstructorsCardLower/>} />
                <Route path="lectures" element={<LecturesCardLower/>} />
                <Route path="rooms" element={<RoomsCardLower/>} />
                <Route path="students" element={<StudentsCardLower/>} />
                <Route path="facilities" element={<FacilitiesCardLower/>} />
              </Route>
              <Route path="privileges" element={<Privileges />} />
              <Route path="Reports" element={<Reports />} />
            </Route>
          </Route>
          {/* element={<RequireAuth allowedRoles={[ROLES.Instructor]} />} */}
          <Route >
            <Route path="instructor" element={<Instructor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
            <Route path="student" element={<Student />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Instructor, ROLES.Admin]} />}>
          </Route>
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;