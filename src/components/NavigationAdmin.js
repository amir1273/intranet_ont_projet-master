import React from "react";
import { NavLink } from "react-router-dom";

const NavigationAdmin = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/Accueil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/GestionEmpAdmin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Gestion des Employés</li>
                </NavLink>
                <NavLink to="/GestionCongesAdmin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Gestion des Congés</li>
                </NavLink>
                <NavLink to="/GestionPretsAdmin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Gestion des Prêts</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default NavigationAdmin;
