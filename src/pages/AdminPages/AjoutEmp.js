import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';
import { useNavigate } from "react-router";

import '../../styles/components/_AjoutEmp.css'
const AjoutEmp = () => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("")
    const [employee, setEmployee] = useState({
        "fonction": "TechnicienPrincipal"
    })
    const navigate = useNavigate();
    useEffect(() => {
        const t = localStorage.getItem("token");
        setToken(t);

        return () => { };
    }, [token]);
    const handleAddEmployee = (e) => {
        const value = e.target.value;
        setEmployee(
            {
                ...employee,
                [e.target.name]: value
            }
        )
    }
    const addEmployee = (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/api/employee/add/";
        let options = {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` },
            data: employee,
            url,
        };
        axios(options)
            .then(({ data }) => {
                console.log(data);


                navigate("/GestionEmpAdmin");
            })
            .catch((er) => {
                setError(true);
                console.log("no data sorry ", er);
                setMessage("Vérifier les données saisies !!");

            });
    }

    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <h1>Ajouter Employés</h1>
            <div className="container">
                <div className="title">Création d'un nouveau Employé</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Matricule Employé</span>
                                <input type="text" name="matricule" placeholder="Entrer Le matricule de " required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">Nom et prénom</span>
                                <input type="text" name='nomComplet' onChange={handleAddEmployee} placeholder="Entrer Le nom complet de " required />
                            </div>
                            <div className="input-box">
                                <span className="details">CIN</span>
                                <input type="text" name='cin' onChange={handleAddEmployee} placeholder="Entrer Le Numéro de la cin " required />
                            </div>
                            <div className="input-box">
                                <span className="details">CNRPS</span>
                                <input type="text" name='cnrps' onChange={handleAddEmployee} placeholder="Entrer Le Numéro de la CNRPS " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Numéro d'assurance</span>
                                <input type="text" name='numAssurance' onChange={handleAddEmployee} placeholder="Entrer Le Numéro de l'assurance " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Fonction</span>
                                <select className='select' name='fonction' onChange={handleAddEmployee} required >
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
                                <input type="Date" name='dateDeNaissance' onChange={handleAddEmployee} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Date d'embauche</span>
                                <input type="Date" name='dateEmbauche' onChange={handleAddEmployee} required />
                            </div>

                            <div className="input-box">
                                <span className="details">Solde Congés</span>
                                <input type="double" name='soldeConge' placeholder="Entrer le solde des congés " onChange={handleAddEmployee} required />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="genre" value='Homme' id="dot-1" onChange={handleAddEmployee} />
                            <input type="radio" name="genre" value='Femme' id="dot-2" onChange={handleAddEmployee} />
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
                        {<div className="text-center"><span className="text-danger">{message}</span></div>
                        }
                        <div className="button">
                            {/* <input type="submit" value="Enregistrement" onClick={(e) => { e.preventDefault(); console.log(employee) }} /> */}
                            <input type="submit" value="Enregistrement" onClick={addEmployee} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AjoutEmp;