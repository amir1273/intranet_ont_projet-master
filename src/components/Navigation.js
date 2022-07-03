import React from 'react';
import { NavLink } from 'react-router-dom'
const Navigation = () => {

    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/GestionConges" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Gestion des Congés</li>
                </NavLink>
                <NavLink to="/GestionEmpAdmin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Administrateur</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;