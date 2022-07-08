import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";

const GestionPrêts = () => {
  const [pret, setPret] = useState([]);
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getConges();

    return () => { };
  }, [refresh]);

  const getConges = () => {
    axios
      .get(
        `http://localhost:8080/pret/empl/${localStorage.getItem("username")}`,
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      )
      .then((r) => {
        setPret(r.data);
        console.log("sucess", pret);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Gestion des Prêts</h1>
      <center>
        <div className="buttonC w-50 ">
          <NavLink to="/AjoutDemandePret">
            <input
              className="buttonB"
              type="button"
              value="Déposer une demande de Prêts"
            />
          </NavLink>
        </div>
      </center>
      <table className="content-tableC">
        <thead>
          <tr>
            <th>Rang</th>
            <th>Matricule</th>
            <th>Nom et Prénom</th>
            <th>Montant</th>
            <th>Décision</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pret?.length > 0 && (
            <>
              {pret.map((c, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{user.matricule}</td>

                    <td>{user.nomComplet}</td>
                    <td>{c.montant} TND</td>

                    <td>{c.statut}</td>

                    <td>
                      <NavLink to="/ModifierPret" title="Modifier">
                        <i class="material-icons">&#xE8B8;</i>
                      </NavLink>
                      <span
                        className="delete"
                        title="Delete"
                        onClick={(e) => {
                          e.preventDefault();
                          axios
                            .post("http://localhost:8080/pret/remove/", c, {
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            })
                            .then((r) => {
                              setRefresh(!refresh);
                            })
                            .catch((err) => console.log(err));
                        }}
                      >
                        <i class="material-icons">&#xE5C9;</i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GestionPrêts;
