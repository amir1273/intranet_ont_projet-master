import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
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
