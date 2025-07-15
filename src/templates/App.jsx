import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { Outlet, useNavigate } from "react-router";
import useUser from "../context/useUser";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/auth");
  }, [user]);
  return (
    <>
      <Sidebar />
      <User />
      <Outlet />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
