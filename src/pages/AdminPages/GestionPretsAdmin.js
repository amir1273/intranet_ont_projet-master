import React from 'react';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';
const GestionPretsAdmin = () => {
    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <table className="content-tableC">
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Nom et Prénom</th>
                        <th>Matricule</th>
                        <th>Montant</th>
                        <th>Décision</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <a href="#" className="Accept" title="Accepter"><i class="material-icons add_task">&#xf23a;</i></a>
                            <a href="#" className="refus" title="Réfuser"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GestionPretsAdmin;