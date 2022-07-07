import React from 'react';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';

const AjoutdemandePret = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="container">
                <div className="title">Ajouter une demande de prêt</div>
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
                                <span className="details">Montant </span>
                                <input type="double" name='soldeConge' placeholder="Entrer le montant désirer" />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Enregistrement" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AjoutdemandePret;