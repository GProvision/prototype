import React from "react";
import useUser from "../context/useUser";
import Style from "../styles/components/User.module.css";
import { NavLink } from "react-router";
const User = () => {
  const user = useUser((state) => state.user);
  const logout = useUser((state) => state.logout);
  return (
    <div id={Style.user}>
      <NavLink to="/perfil">{user.user}</NavLink>
      <button type="button" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default User;
