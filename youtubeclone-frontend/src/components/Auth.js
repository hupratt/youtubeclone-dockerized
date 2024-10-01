import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "../pages/Home";
import { useSelector } from "react-redux";

const Auth = () => {
  const [auth, setAuth] = useState("LOGIN");
  const { token } = useSelector((state) => state.user.data);
  if (token){
    return <Home/>
  }
  if (auth === "SIGNUP") {
    return <Signup setAuth={setAuth}/>
  } else {
    return <Login setAuth={setAuth}/>
  }
};

export default Auth;
