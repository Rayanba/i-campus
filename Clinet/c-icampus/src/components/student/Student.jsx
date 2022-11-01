import { Link , useNavigate } from "react-router-dom"
import useLogout from '../../hooks/useLogout';


function Student () {
    const navigate = useNavigate();
    const logout = useLogout();
    const signOut = async () => {
        await logout();
        navigate('/');
    }
    return (
        <section >
            <h1>Students Page</h1>
            <br />
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
            <Link onClick={signOut}>Sign Out</Link>
        </section>
    )
}

export default Student;