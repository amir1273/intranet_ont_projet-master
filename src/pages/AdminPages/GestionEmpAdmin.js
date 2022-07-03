import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';
import '../../styles/components/_GestionEmpAdmin.css'
const GestionEmpAdmin = () => {
    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <div className="button">
                <NavLink to="/AjoutEmployes">
                    <input className="buttonB" type="button" value="Ajouter un Employés" />
                </NavLink>
                <input className="search" type="search" id="site-search" name="q" />
                <input className="buttonB" type="button" value="Rechercher un Employé" />
            </div>

            {/* <div className="button">
            </div> */}

            <table className="content-table">
                <thead>
                    <tr>
                        <th>Rank</th>
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
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>
                            <NavLink to="/ModifierEmployes" title="Modifier">
                                <i class="material-icons">&#xE8B8;</i>
                            </NavLink>
                            <a href="/SupprimerEmployes" className="delete" title="Delete"><i class="material-icons">&#xE5C9;</i></a></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>
                            <NavLink to="/ModifierEmployes" title="Modifier">
                                <i class="material-icons">&#xE8B8;</i>
                            </NavLink>
                            <a href="/SupprimerEmployes" className="delete" title="Delete"><i class="material-icons">&#xE5C9;</i></a></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>
                            <NavLink to="/ModifierEmployes" title="Modifier">
                                <i class="material-icons">&#xE8B8;</i>
                            </NavLink>
                            <a href="/SupprimerEmployes" className="delete" title="Delete"><i class="material-icons">&#xE5C9;</i></a></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>
                            <NavLink to="/ModifierEmployes" title="Modifier">
                                <i class="material-icons">&#xE8B8;</i>
                            </NavLink>
                            <a href="/SupprimerEmployes" className="delete" title="Delete"><i class="material-icons">&#xE5C9;</i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GestionEmpAdmin;