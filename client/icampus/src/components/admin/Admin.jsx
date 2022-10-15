import styles from './Admin.module.scss'
import {PagesContainer, Sidebar, Topbar} from './index';
import { Dashboard, Privileges, Reports} from './container/pages/index';

import {Routes, Route, Navigate} from 'react-router-dom';



function Admin (){
    return (

        <div className={styles.adminContainer}>
            <Sidebar/>
            <Topbar/>
                <Routes>
                    <Route path="/admin/" element={<PagesContainer/>}>
                        <Route path="/admin/" element={<Navigate replace to = "/admin/dashboard"/>}/>
                        <Route path="/admin/dashboard" element={<Dashboard/>}/>
                        <Route path="/admin/privileges" element={<Privileges/>}/>
                        <Route path="/admin/reports" element={<Reports/>}/>
                    </Route>
                </Routes>
        </div>

    )
}
export default Admin;