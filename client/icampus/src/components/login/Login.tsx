import {useRef, useState, useEffect, useContext} from 'react';

import AuthContext from '../../context/AuthProvider';
import styles from "./Login.module.scss";

import axios from '../../api/axios'
const LOGIN_URL = '/users'


function Login (){

    const  setAuth  = useContext(AuthContext);

    //refrences needed///////////
    const userRef = useRef<HTMLInputElement>(null!);
    const errRef = useRef<HTMLInputElement>(null!);

    // stats 
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    console.log("useState")
    console.log(useState)

    //set focus on first input when component load ///////////////////
    useEffect (() => {
        userRef.current.focus();
    },[])

    //empty any error meassege if user changed user state of password state//////////////////
    useEffect (() => {
        setErrMsg('');
    },[user, pwd])

    // this will be async with db ////////////////////////
    //Is Useing 'any' a mistake? 
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({username: user, email: pwd }),
                {
                    headers: {'Content-Type': 'application/json'}, 
                    withCredentials: true
                }
            ); 
            console.log(JSON.stringify(response?.data))
            // const accessToken = response?.data?.accessToken;
            // const rols = response?.data?.roles;
            // setAuth ({username, email});
            setUser('');
            setPwd('');
            setSuccess(true);

        }catch (err){
            // if(!err?.response){
            //     setErrMsg('No Server Response');
            // }else if (err.respponse?.status === 400){
            //     setErrMsg('Missing Username or Password');
            // }else (err.respponse?.status === 401){
            //     setErrMsg('Login Faile');
            // }
            errRef.current.focus();

        }

    }


    
    return (

        <>
            {/* this meassege will apears if login success */}
            {success ? (
                <section>
                    <h1>logged in!</h1>
                    <br />
                    <p>
                        {/* <a href="#">go home</a> */}
                    </p>
                </section>
            ):(
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
        )}
        </>
    )
}
export default Login;