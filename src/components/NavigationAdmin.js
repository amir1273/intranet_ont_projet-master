import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAdmin = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/GestionEmpAdmin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Gestion des Employés</li>
                </NavLink>
                <NavLink to="/GestionCongesAdmin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Gestion des Congés</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default NavigationAdmin;