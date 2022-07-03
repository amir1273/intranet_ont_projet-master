import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import "../styles/components/_profile.css";
const Profil = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(JSON.parse(u));
    console.log(user);
    return () => {};
  }, [user]);

  return (
    <div>
      <Logo />
      <h1>Profil</h1>
      <div className="containerP">
        <div className="title">Profile Employé : </div>
        <div className="content">
          <div class="profile-pic">
            <img
              className="imgProfile"
              src="./logoOnt.jpg"
              alt="imageProfil"
              width={200}
            />
          </div>
          <div className="form">
            <div className="user-details">
              <div className="output-box">
                <span className="details">Matricule Employé :</span>
                <span className="output" name="matricule">
                  {user.matricule}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Nom et Prénom :</span>
                <span className="output" name="nomComplet">
                  {user.nomComplet}
                </span>
              </div>
              <div className="output-box">
                <span className="details">CIN :</span>
                <span className="output" name="cin">
                  {user.cin}
                </span>
              </div>
              <div className="output-box">
                <span className="details">CNRPS :</span>
                <span className="output" name="cnrps">
                  {user.cin}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Numéro d'Assurance :</span>
                <span className="output" name="numAssurance">
                  {user.numAssurance}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Date de Naissance :</span>
                <span className="output" name="dateNaissance">
                  {user.dateDeNaissance}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Date d'Embauche :</span>
                <span className="output" name="matricule">
                  {user.dateEmbauche}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Fonction :</span>
                <span className="output" name="fonction">
                  {user.fonction}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Solde Congé :</span>
                <span className="output" name="soldeConge">
                  {user.soldeConge}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Genre :</span>
                <span className="output" name="genre">
                  {user.genre}
                </span>
              </div>
              <div className="output-box">
                <span className="details">Numéro de Téléphone :</span>
                <span className="output" name="genre">
                  99999999
                </span>
              </div>
            </div>
          </div>
          <div className="buttonC">
            <NavLink to="/ModifierProfil">
              <input
                className="buttonB"
                type="button"
                value="Modifier Les données du profile"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
