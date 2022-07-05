import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';

const RechercherEmp = () => {

    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <h1>Rechercher Employés</h1>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Nom et Prénom</th>
                        <th>Matricule</th>
                        <th>CIN</th>
                        <th>CNRPS</th>
                        <th>Numéro d'assurance</th>
                        <th>Date de Naissance</th>
                        <th>Date d'Embauche</th>
                        <th>Solde de Congé</th>
                        <th>Fonction</th>
                        <th>Téléphone</th>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <NavLink to="/ModifierEmployes" title="Modifier">
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

export default RechercherEmp;