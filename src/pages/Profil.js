import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import '../styles/components/_profile.css'

const Profil = () => {
    return (
        <div>
            <Logo />
            <h1>Profil</h1>
            <div className="containerP">
                <div className="title">Profile Employé : </div>
                <div className="content">
                    <div class="profile-pic">
                        <img className="imgProfile" src='./logoOnt.jpg' alt='imageProfil' width={200} />
                    </div>
                    <div className='form'>
                        <div className="user-details">
                            <div className="output-box">
                                <span className="details">Matricule Employé :</span>
                                <span className='output' name="matricule" >0819</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Nom et Prénom :</span>
                                <span className='output' name="nomComplet">Nader Mahjoubi</span>
                            </div>
                            <div className="output-box">
                                <span className="details">CIN :</span>
                                <span className='output' name="cin" >05219086</span>
                            </div>
                            <div className="output-box">
                                <span className="details">CNRPS :</span>
                                <span className='output' name="cnrps">0074035248</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Numéro d'Assurance :</span>
                                <span className='output' name="numAssurance">484</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Date de Naissance :</span>
                                <span className='output' name="dateNaissance">25/07/1973</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Date d'Embauche :</span>
                                <span className='output' name="matricule">01/10/1999</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Fonction :</span>
                                <span className='output' name="fonction">Technicien Principal</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Solde Congé :</span>
                                <span className='output' name="soldeConge">27.5</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Genre :</span>
                                <span className='output' name="genre">Homme</span>
                            </div>
                            <div className="output-box">
                                <span className="details">Numéro de Téléphone :</span>
                                <span className='output' name="genre">99999999</span>
                            </div>
                        </div>
                    </div>
                    <div className="buttonC">
                        <NavLink to="/ModifierProfil" >
                            <input className="buttonB" type="button" value="Modifier Les données du profile" />
                        </NavLink>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Profil;