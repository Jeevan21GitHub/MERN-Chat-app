import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
 
  return (
    <>
      <Routes>
        <Route path="/" element={authUser?<Home />:<Navigate to={"/login"}/>} />
        <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
