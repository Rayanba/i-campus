import {useRef, useState, useEffect} from 'react'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';

import styles from "./Login.module.scss";
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios'

const LOGIN_URL = '/auth' //like in back-end 


function Login (){

    const  { setAuth }:any  = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    //refneeded ///////////
    const userRef = useRef<HTMLInputElement>(null!);
    const errRef = useRef<HTMLInputElement>(null!);

    // stats 
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    console.log("useState")
    console.log(useState)

    //set focus on first input when component load ///////////////////
    useEffect (() => {
        userRef.current.focus();
    },[])

    //empty any error meassege if user changed user state of password state //////////////////
    useEffect (() => {
        setErrMsg('');
    },[user, pwd])
 
    // this will be async with db ////////////////////////
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({user, pwd}), // if back-end doesn't set to (user, pwd), we can use (unsername: user, password: pwd)
                {
                    headers: {'Content-Type': 'application/json'}, 
                    withCredentials: true
                }
            ); 
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth ({user , pwd, roles, accessToken});
            setUser('');
            setPwd('');
            navigate(from, {replace:true});
        } catch (err){
            if(!err?.response) {
                console.log("err")
                setErrMsg('No Server Response');
            }else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password');
            }else if(err.response?.status === 401){
                setErrMsg('Unauthorized');
            }else {
                setErrMsg('Login Faile');
            }
            errRef.current.focus();
        }
    }
    
    
    
    return (

        <section>
            <p 
            ref={errRef} 
            className={errMsg? styles.sterrmsg : styles.offscreen} 
            aria-live="assertive">{errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
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
                </form>
        </section>
            )
}
export default Login;