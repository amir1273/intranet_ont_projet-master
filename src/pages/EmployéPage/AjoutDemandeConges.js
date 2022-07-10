import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";

const AjoutDemandeConges = () => {
  const [user, setUser] = useState({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [dateDebut, setdateDebut] = useState();
  const [dateFin, setdateFin] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    return () => { };
  }, []);

  const addConge = (e) => {
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

  // const handleAddConge = (e) => {
  //   const value = e.target.value;

  //   setConges({
  //     ...conges,
  //     [e.target.name]: value,
  //   });
  // };
  return (
    <div>
      <Logo />
      <Navigation />
      <div className="container">
        <div className="title">Déposer une demande de congé</div>
        <div className="content">
          <form>
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
                  name="dateDebut"
                  required
                  onChange={(e) => setdateDebut(e.target.value)}
                  value={dateDebut}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="input-box">
                <span className="details">Date de la fin</span>
                <input
                  type="Date"
                  name="dateFin"
                  required
                  onChange={(e) => setdateFin(e.target.value)}
                  value={dateFin}
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

              <div className="input-box">
                <span className="details">période</span>
                <input
                  type="double"
                  name="periode"
                  disabled
                  value={Math.floor(
                    (Date.parse(dateFin) - Date.parse(dateDebut)) / 86400000
                  )}
                />
              </div>
              {error && (
                <div className="mr-auto ml-auto">
                  <span className="  text-danger">{error}</span>
                </div>
              )}
            </div>
            <div className="button">
              <input type="button" value="Enregistrement" onClick={addConge} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutDemandeConges;
