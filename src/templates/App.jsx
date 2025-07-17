import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { Navigate, Outlet } from "react-router";
import useUser from "../context/useUser";
import { Toaster } from "react-hot-toast";
const App = () => {
  const user = useUser((state) => state.user);
  if (!user || !user?.user) return <Navigate to="/auth" />;
  if (user && user?.user)
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
