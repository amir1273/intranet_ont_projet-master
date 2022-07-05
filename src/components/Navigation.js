import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUpdateUser, useUser } from "../context/UserContext";
const Navigation = () => {
  const [userAuth, setUserAuth] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const user = useUser();
  const updateUser = useUpdateUser();
  // const navigate = useNavigate();
  useEffect(() => {
    setUserAuth(JSON.parse(localStorage.getItem("user")));
    console.log("", userAuth)
    return () => { };
  }, [user]);
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/Accueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/GestionConges"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Gestion des Congés</li>
        </NavLink>
        <NavLink
          to="/GestionPrets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Gestion des Prêts</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
