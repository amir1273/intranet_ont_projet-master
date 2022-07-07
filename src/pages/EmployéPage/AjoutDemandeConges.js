import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";

const AjoutDemandeConges = () => {
  const [conges, setConges] = useState({});
  const [user, setUser] = useState({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    return () => {};
  }, []);

  const addConge = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/conges/add/${localStorage.getItem("username")}`,
        conges,
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      )
      .then((r) => {
        setConges(r.data);
        console.log("sucess", conges);
        setDone(true);
        navigate("/GestionConges");
      })
      .catch((err) => console.log(err));
  };
  const handleAddConge = (e) => {
    const value = e.target.value;
    setConges({
      ...conges,
      [e.target.name]: value,
    });
  };
  return (
    <div>
      <Logo />
      <Navigation />
      <div className="container">
        <div className="title">Ajouter une demande de congé</div>
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
                  onChange={handleAddConge}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="input-box">
                <span className="details">Date de la fin</span>
                <input
                  type="Date"
                  name="dateFin"
                  required
                  onChange={handleAddConge}
                  disabled={conges.dateDebut === "" ? true : false}
                  min={
                    conges.dateDebut
                      ? new Date(conges.dateDebut).toISOString().split("T")[0]
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
