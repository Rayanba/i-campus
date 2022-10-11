import { createContext, useState} from "react";

type AuthProviderProps = {
    children: any
}


const AuthContext = createContext({});
// Is using 'any' safe ?? // Is  using const safe? 
export const AuthProvider = ({children}: AuthProviderProps) => {
    const [auth, setAuth] = useState({});



    return(
        <>
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
        </>
    )

}

export default AuthContext;