import React from 'react';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';

const ModifierEmp = () => {
    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <h1>Modifier Employés</h1>
            <div className="container">
                <div className="title">Modifier les données d'un Employé</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Matricule Employé</span>
                                <input type="text" name="matricule" placeholder="Entrer Le matricule de " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Nom et prénom</span>
                                <input type="text" name='nomComplet' placeholder="Entrer Le nom complet de " required />
                            </div>
                            <div className="input-box">
                                <span className="details">CIN</span>
                                <input type="text" name='cin' placeholder="Entrer Le Numéro de la cin " required />
                            </div>
                            <div className="input-box">
                                <span className="details">CNRPS</span>
                                <input type="text" name='cnrps' placeholder="Entrer Le Numéro de la CNRPS " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Numéro d'assurance</span>
                                <input type="text" name='numAssurance' placeholder="Entrer Le Numéro de l'assurance " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Fonction</span>
                                <select className='select' name='fonction' required >
                                    <option value="TechnicienPrincipal" selected>Technicien Principal</option>
                                    <option value="TechnicienChef" >Technicien en Chef</option>
                                    <option value="TechnicienExpert">Technicien Expert</option>
                                    <option value="Ingénieur">Ingénieur</option>
                                    <option value="IngénieurPrincipale">Ingénieur Principale</option>
                                    <option value="IngénieurChef">Ingénieur en Chef</option>
                                    <option value="DirecteurExploitation">Directeur d'Exploitation</option>
                                    <option value="SousDirecteurMaintenance">Sous Directeur de Maintenance</option>
                                    <option value="DirecteurMaintenance">Directeur de Maintenance</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Date de Naissance</span>
                                <input type="Date" name='dateDeNaissance' required />
                            </div>
                            <div className="input-box">
                                <span className="details">Date d'embauche</span>
                                <input type="Date" name='dateEmbauche' required />
                            </div>

                            <div className="input-box">
                                <span className="details">Solde Congés</span>
                                <input type="double" name='soldeConge' placeholder="Entrer le solde des congés " required />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="genre" value='Homme' id="dot-1" />
                            <input type="radio" name="genre" value='Femme' id="dot-2" />
                            <span className="gender-title">Genre</span>
                            <div className="category">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Homme</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Femme</span>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            {/* <input type="submit" value="Enregistrement" onClick={(e) => { e.preventDefault(); console.log(employee) }} /> */}
                            <input type="submit" value="Enregistrement" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModifierEmp;