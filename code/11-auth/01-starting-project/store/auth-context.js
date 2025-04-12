import { createContext, useState } from "react";

export const AuthContext = createContext({
    token:"",
    isAuthenticated:false,
    authenticate:(token)=>{},
    logout:()=>{}
})

function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState()

    function authenticate(token){
        setAuthToken(token)
    }
    function logout(token){
        setAuthToken(null)
    }

    const value={
        token:authToken,
        isAuthenticated:!!authToken,
        authenticate:authenticate,
        logout:logout
    }
<AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthContextProvider