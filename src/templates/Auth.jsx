import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
const Auth = () => {
  return (
    <>
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Auth;
