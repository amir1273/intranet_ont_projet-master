import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";

const GestionCongés = () => {
  const [conges, setConges] = useState([]);
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getConges();

    return () => {};
  }, [refresh]);

  const getConges = () => {
    axios
      .get(
        `http://localhost:8080/conge/empl/${localStorage.getItem("username")}`,
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      )
      .then((r) => {
        setConges(r.data);
        console.log("sucess", conges);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Gestion des Congés</h1>
      <center>
        <div className="buttonC w-50 ">
          <NavLink to="/AjoutDemandeConges">
            <input
              className="buttonB"
              type="button"
              value="Déposer une demande de Congés"
            />
          </NavLink>
        </div>
      </center>
      <table className="content-tableC">
        <thead>
          <tr>
            <th>Rang</th>
            <th>Nom et Prénom</th>
            <th>Matricule</th>
            <th>Date début</th>
            <th>Date Fin</th>
            <th>Période</th>
            <th>Décision</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {conges?.length > 0 && (
            <>
              {conges.map((c, index) => {
                return (
                  <tr key={c.id}>
                    <td>{index}</td>
                    <td>{user.nomComplet}</td>
                    <td>{user.matricule}</td>
                    <td>{c.dateDebut}</td>
                    <td>{c.dateFin}</td>
                    <td>{c.periode}</td>
                    <td>{c.statut}</td>

                    <td>
                      <NavLink
                        to="/ModifierConge"
                        state={{ conges: c }}
                        title="Modifier"
                      >
                        <i class="material-icons">&#xE8B8;</i>
                      </NavLink>
                      <span
                        className="delete"
                        title="Delete"
                        onClick={(e) => {
                          e.preventDefault();
                          axios
                            .post("http://localhost:8080/conges/remove/", c, {
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

export default GestionCongés;
