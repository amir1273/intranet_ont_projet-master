import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router";

const ModifierPret = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState("");
  const [pret, setPret] = useState(state.pret);
  const [montant, setMontant] = useState(pret.montant);

  useEffect(() => {
    console.log("?.??????????????????", state.pret);

    setUser(JSON.parse(localStorage.getItem("user")));
    setPret(state.pret);
    return () => {};
  }, [state.pret]);

  const update = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/pret/update/${montant}`, pret, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
      .then((r) => {
        setError("something went wrong!");
        navigate("/GestionPrets");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Modifier demande de Prêt</h1>
      <div className="container">
        <div className="title">Modifier demande de Prêt</div>
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
                  value={pret?.employee.matricule}
                />
              </div>
              <div className="input-box">
                <span className="details">Nom et prénom</span>
                <input
                  type="text"
                  name="nomComplet"
                  placeholder="Entrer Le nom complet de "
                  disabled
                  value={pret?.employee.nomComplet}
                />
              </div>
              <div className="input-box">
                <span className="details">Montant</span>
                <input
                  type="double"
                  name="soldeConge"
                  placeholder="Entrer le montant désirer"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
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

export default ModifierPret;
