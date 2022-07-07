import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';

const GestionPrêts = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Gestion des Prêts</h1>
            <center>
                <div className="buttonC w-50 ">
                    <NavLink to="/AjoutDemandePret" >
                        <input className="buttonB" type="button" value="Déposer une demande de Prêts" />
                    </NavLink>
                </div>
            </center>
            <table className="content-tableC">
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Matricule</th>
                        <th>Nom et Prénom</th>
                        <th>Montant</th>
                        <th>Décision</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <NavLink to="/ModifierPret" title="Modifier">
                                <i class="material-icons">&#xE8B8;</i>
                            </NavLink>
                            <a href="/SupprimerEmployes" className="delete" title="Delete"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GestionPrêts;