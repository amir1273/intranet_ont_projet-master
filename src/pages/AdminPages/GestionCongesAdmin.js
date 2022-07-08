import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavigationAdmin from "../../components/NavigationAdmin";
import "../../styles/components/_GestionCongesAdmin.css";

const GestionCongesAdmin = () => {
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
      .get("http://localhost:8080/conges/", {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
      .then((r) => {
        setConges(r.data);
      })
      .catch((err) => console.log(err));
  };
  const acceptConge = (c) => {
    axios
      .post("http://localhost:8080/conges/accept", c, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
      .then((r) => {
        alert("accepted");
        setRefresh(!refresh);
        localStorage.setItem("notif_conge", c);
      })
      .catch((err) => console.log(err));
  };
  const refusConge = (c) => {
    axios
      .post("http://localhost:8080/conges/refus", c, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
      .then((r) => {
        alert("refusé");
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Logo />
      <NavigationAdmin />
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
          </tr>
        </thead>
        <tbody>
          {conges.map((c, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{c.employee.nomComplet}</td>
                <td>{c.employee.matricule}</td>
                <td>{c.dateDebut}</td>
                <td>{c.dateFin}</td>
                <td>{c.periode}</td>
                <td>
                  <span
                    className="Accept"
                    title="Accepter"
                    onClick={() => {
                      acceptConge(c);
                    }}
                  >
                    <i class="material-icons add_task">&#xf23a;</i>
                  </span>
                  <span
                    className="refu"
                    title="Réfuser"
                    onClick={() => {
                      refusConge(c);
                    }}
                  >
                    <i class="material-icons">&#xE5C9;</i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GestionCongesAdmin;
