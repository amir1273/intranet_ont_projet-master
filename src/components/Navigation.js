import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(localStorage.getItem("role"));
    console.log(role);
    return () => {};
  }, [role]);

  return (
    <div className="navigation">
      <ul>
        {role === "USER" ? (
          <>
            <NavLink
              to="/"
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
          </>
        ) : (
          <>
            <NavLink
              to="/GestionEmpAdmin"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Administrateur</li>
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
