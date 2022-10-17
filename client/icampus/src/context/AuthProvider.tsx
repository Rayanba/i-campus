import { createContext, ReactNode, useState} from "react";

type authprops = {
    children: ReactNode;
}


const AuthContext = createContext({});
// Is using 'any' safe ?? // Is  using const safe? 
export const AuthProvider = ({children}:authprops) => {
    const [auth, setAuth] = useState({});



    return(
        
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
        
    )

}

export default AuthContext;