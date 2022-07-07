import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const ModifierConge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(false);
  const [dateDebut, setdateDebut] = useState();
  const [dateFin, setdateFin] = useState();
  const [conges, setConges] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setConges(state.conges);

    return () => {};
  }, []);

  const update = (e) => {
    e.preventDefault();
    setConges({ ...conges }, [dateDebut, dateFin]);
    console.log("update");
  };
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Modifier demande de Congé</h1>
      <div className="container">
        <div className="title">Modifier demande de congé</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Matricule Employé</span>
                <input
                  type="text"
                  name="matricule"
                  placeholder="Entrer Le matricule de"
                  disabled
                  value={user.matricule}
                />
              </div>
              <div className="input-box">
                <span className="details">Nom et prénom</span>
                <input
                  type="text"
                  name="nomComplet"
                  placeholder="Entrer Le nom complet de "
                  disabled
                  value={user.nomComplet}
                />
              </div>
              <div className="input-box">
                <span className="details">Date de Début</span>
                <input
                  type="Date"
                  name="datedebutConge"
                  required
                  value={dateDebut}
                  onChange={(e) => setdateDebut(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Date de la fin</span>
                <input
                  type="Date"
                  name="dateFinConge"
                  required
                  value={dateFin}
                  onChange={(e) => setdateFin(e.target.value)}
                />
              </div>

              <div className="input-box">
                <span className="details">Solde Congés</span>
                <input
                  type="double"
                  name="soldeConge"
                  placeholder="Entrer le solde des congés"
                  disabled
                  value={conges.employee.soldeConge}
                />
              </div>
            </div>
            <div className="button">
              <input
                type="button"
                value="Enregistrement Modification"
                onClick={update}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifierConge;
