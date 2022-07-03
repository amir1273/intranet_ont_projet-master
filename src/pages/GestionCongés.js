import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const GestionCongés = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Gestion des Congés</h1>
            <table className="content-tableC">
                <thead>
                    <tr>
                        <th>Nom et Prénom</th>
                        <th>Matricule</th>
                        <th>Date début</th>
                        <th>Date Fin</th>
                        <th>Période</th>
                        <th>Décision</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>Statut</td>
                    </tr>
                </tbody>
                <tfoot>
                    <div className="buttonC">
                        <NavLink to="/AjoutDemandeConges" >
                            <input className="buttonB" type="button" value="Déposer une demande de Congés" />
                        </NavLink>
                    </div>
                </tfoot>

            </table>

        </div>
    );
};

export default GestionCongés;