import React from 'react';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';
import '../../styles/components/_GestionCongesAdmin.css'


const GestionCongesAdmin = () => {
    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <table className="content-tableC">
                <thead>
                    <tr>
                        <th>Rank</th>
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
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>dcode</td>
                        <td>
                            <a href="#" className="Accept" title="Accepter"><i class="material-icons add_task">&#xf23a;</i></a>
                            <a href="#" className="refu" title="Réfuser"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GestionCongesAdmin;