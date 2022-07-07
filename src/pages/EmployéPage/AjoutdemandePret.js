import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";

const AjoutdemandePret = () => {
  const [user, setUser] = useState({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [montant, setMontant] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    return () => {};
  }, []);

  const addPret = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/pret/add/${localStorage.getItem("username")}`,
        {
          montant,
        },
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      )
      .then((r) => {
        setDone(true);
        navigate("/GestionPrets");
      })
      .catch((err) => console.log(err));
  };
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
                <span className="details">Montant </span>
                <input
                  type="double"
                  name="montant"
                  placeholder="Entrer le montant désirer"
                  onChange={(e) => setMontant(e.target.value)}
                  value={montant}
                />
              </div>
            </div>
            <div className="button">
              <input type="button" value="Enregistrement" onClick={addPret} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutdemandePret;
