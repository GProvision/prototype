import React from "react";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Sidebar />
      <User />
      <Outlet />
    </>
  );
};

export default App;
