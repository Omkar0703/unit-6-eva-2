import React, { createContext, useState } from "react";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state;

// 3. you can provide all loading, error, auth status, token data, function which updates state in here; which can be consumed anywhere in your application.
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(userDetails) {
    
    console.log(userDetails)
    setIsLoading(true);

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-Type": "application/json" },
    
    }).then(res=>res.json()).then(res=>{
      if(res.error){
        setIsAuth(false)
        return;
      }
      setIsAuth(true)
      setToken(res.token)

    }).catch(err=>{console.log("err",err)
    setIsAuth(false)}).finally(()=>setIsLoading(false))
      
  }

  return <AuthContext.Provider value={{handleLogin,isAuth,token,isLoading}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;