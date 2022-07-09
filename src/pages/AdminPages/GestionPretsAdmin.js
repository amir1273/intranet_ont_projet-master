import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavigationAdmin from "../../components/NavigationAdmin";

const GestionPretsAdmin = () => {
  const [pret, setPret] = useState([]);
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getPret();

    return () => { };
  }, [refresh]);

  const getPret = () => {
    axios
      .get("http://localhost:8080/pret/", {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
      .then((r) => {
        setPret(r.data);
      })
      .catch((err) => console.log(err));
  };
  const acceptPret = (c) => {
    axios
      .post("http://localhost:8080/pret/accept", c, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
      .then((r) => {
        alert("accepted");
        setRefresh(!refresh);
        localStorage.setItem("notif_pret", c);
      })
      .catch((err) => console.log(err));
  };
  const refusPret = (c) => {
    axios
      .post("http://localhost:8080/pret/refus", c, {
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
            <th>Montant</th>
            <th>Décision</th>
          </tr>
        </thead>
        {pret.map((c, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{c.employee.nomComplet}</td>
              <td>{c.employee.matricule}</td>
              <td>{c.montant}</td>

              <td>
                <span
                  className="Accept"
                  title="Accepter"
                  onClick={() => {
                    acceptPret(c);
                  }}
                >
                  <i class="material-icons add_task">&#xf23a;</i>
                </span>
                <span
                  className="refu"
                  title="Réfuser"
                  onClick={() => {
                    refusPret(c);
                  }}
                >
                  <i class="material-icons">&#xE5C9;</i>
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default GestionPretsAdmin;
