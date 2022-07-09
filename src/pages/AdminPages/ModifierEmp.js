import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import NavigationAdmin from '../../components/NavigationAdmin';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router";

const ModifierEmp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [employee, setEmployee] = useState({})
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [error, setError] = useState(false);

    useEffect(() => {

        console.log();
        return () => {

        }
    }, [])
    const handleAddEmployee = (e) => {
        console.log(employee)

        const value = e.target.value;
        setEmployee(
            {
                ...employee,
                [e.target.name]: value
            }
        )
    }
    const addEmployee = (e) => {
        console.log('i am there', state.employee.matricule, employee)
        e.preventDefault();
        const url = `http://localhost:8080/api/employee/edit/${state.employee.matricule}`;
        let options = {
            method: "PATCH",
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
                setError(true)
                console.log("no data sorry ", er);
            });
    }
    return (
        <div>
            <Logo />
            <NavigationAdmin />
            <h1>Modifier Employés</h1>
            {
                error && <p>error</p>
            }
            <div className="container">
                <div className="title">Modifier les données d'un Employé</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Matricule Employé</span>
                                <input type="text" name="matricule" placeholder={state.employee.matricule} required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">Nom et prénom</span>
                                <input type="text" name='nomComplet' placeholder={state.employee.nomComplet} required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">CIN</span>
                                <input type="text" name='cin' placeholder={state.employee.cin} required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">CNRPS</span>
                                <input type="text" name='cnrps' placeholder={state.employee.cnrps} required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">Numéro d'assurance</span>
                                <input type="text" name='numAssurance' placeholder={state.employee.numAssurance} required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">Fonction</span>
                                <select className='select' name='fonction' required onChange={handleAddEmployee}>
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
                                <input type="Date" name='dateDeNaissance' required onChange={handleAddEmployee} />
                            </div>
                            <div className="input-box">
                                <span className="details">Date d'embauche</span>
                                <input type="Date" name='dateEmbauche' required onChange={handleAddEmployee} />
                            </div>

                            <div className="input-box">
                                <span className="details">Solde Congés</span>
                                <input type="double" name='soldeConge' placeholder={state.employee.soldeConge} required onChange={handleAddEmployee} />
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

export default ModifierEmp;