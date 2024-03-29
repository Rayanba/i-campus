import styles from './Login.module.css';
import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';

import axios from '../../api/axios';
const LOGIN_URL = '/auth'; // like in back-end


const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [username, resetUser, userAttribs] = useInput('username', '', '');// useLocalStorage('user', ''); //useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [check, toggleCheck] = useToggle('persist', false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({username, pwd, roles, accessToken});
            // setUser('');
            resetUser();
            setPwd('');
            navigate(from, { replace: true });

        } catch (err) {
            
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
                    
            }
            errRef.current.focus();
        }
    }
    // const togglePersist = () => {
    //     setPersist(prev => !prev);
    // }

    // useEffect(() => {
    //     localStorage.setItem("persist", persist);
    // }, [persist])

    return (
        <div className={styles.loginContainer}>
                <p ref={errRef} className={errMsg ? styles.errMsg : styles.offscreen} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        {...userAttribs}
                        required
                        />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                        
                        
                    <button>Sign In</button>
                    <div className={styles.persistCheck}>
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={toggleCheck}
                        checked={check}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
                </form>
            
        </div>
    )
}

export default Login
