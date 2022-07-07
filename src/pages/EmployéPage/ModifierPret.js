import React from 'react';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';

const ModifierPret = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Modifier demande de Prêt</h1>
            <div className="container">
                <div className="title">Modifier demande de Prêt</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Matricule Employé</span>
                                <input type="text" name="matricule" placeholder="Entrer Le matricule de" disabled />
                            </div>
                            <div className="input-box">
                                <span className="details">Nom et prénom</span>
                                <input type="text" name='nomComplet' placeholder="Entrer Le nom complet de " disabled />
                            </div>
                            <div className="input-box">
                                <span className="details">Montant</span>
                                <input type="double" name='soldeConge' placeholder="Entrer le montant désirer" />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Enregistrement Modification" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModifierPret;