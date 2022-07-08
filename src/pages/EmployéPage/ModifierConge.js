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
  const [error, setError] = useState("");
  const [conges, setConges] = useState({});

  const [dateDebut, setdateDebut] = useState(conges.dateDebut);
  const [dateFin, setdateFin] = useState(conges.dateFin);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setConges(state.conges);
    setdateDebut(conges.dateDebut);
    setdateFin(conges.dateFin);

    return () => {};
  }, [conges]);

  const update = (e) => {
    e.preventDefault();
    let diff = Math.floor(
      (Date.parse(dateFin) - Date.parse(dateDebut)) / 86400000
    );
    if (user.soldeConge < diff) setError("solde congé insuffisant!");
    else {
      axios
        .post(
          `http://localhost:8080/conges/add/${localStorage.getItem(
            "username"
          )}`,
          {
            dateDebut,
            dateFin,
            periode: diff,
          },
          {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        )
        .then((r) => {
          setError("something went wrong!");
          navigate("/GestionConges");
        })
        .catch((err) => console.log(err));
    }
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
                  min={new Date().toISOString().split("T")[0]}
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
                  disabled={dateDebut === "" ? true : false}
                  min={
                    dateDebut
                      ? new Date(dateDebut).toISOString().split("T")[0]
                      : ""
                  }
                />
              </div>

              <div className="input-box">
                <span className="details">Solde Congés</span>
                <input
                  type="double"
                  name="soldeConge"
                  placeholder="Entrer le solde des congés"
                  disabled
                  value={user.soldeConge}
                />
              </div>
              {error && (
                <div className="mr-auto ml-auto">
                  <span className="  text-danger">{error}</span>
                </div>
              )}
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
