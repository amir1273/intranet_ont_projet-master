import axios from "axios";
import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import NavigationAdmin from "../../components/NavigationAdmin";
import "../../styles/components/_GestionEmpAdmin.css";
const GestionEmpAdmin = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const getemployees = () => {
      axios
        .get("http://localhost:8080/api/employees", {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        })
        .then((r) => {
          console.log("employees ", r.data);
          setEmployees(r.data);
          setFilter(r.data);
        })
        .catch((err) => console.log(err));
    };
    getemployees();
    return () => { };
  }, []);

  const searchEmployee = () => {
    setFilter(
      employees.filter((e) =>
        e.matricule.toUpperCase().includes(search.toUpperCase())
      )
    );
  };

  return (
    <div>
      <Logo />
      <NavigationAdmin />
      <div className="button">
        <NavLink to="/AjoutEmployes" onClick={() => setFilter(employees)}>
          <input
            className="buttonB"
            type="button"
            value="Ajouter un Employés"
          />
        </NavLink>
        <input
          className="search"
          type="search"
          id="site-search"
          name="q"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input
          className="buttonB"
          type="button"
          value="Rechercher un Employé"
          onClick={searchEmployee}
        />
      </div>

      {/* <div className="button">
            </div> */}

      <table className="content-table">
        <thead>
          <tr>
            <th>Rang</th>
            <th>Nom et Prénom</th>
            <th>Matricule</th>
            <th>CIN</th>
            <th>CNRPS</th>
            <th>Numéro d'assurance</th>
            <th>Date de Naissance</th>
            <th>Date d'Embauche</th>
            <th>Solde de Congé</th>
            <th>Fonction</th>
            <th>Téléphone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filter?.length === 0 ? (
            <>
              <p>pas d'employé trouvé</p>
            </>
          ) : (
            filter.map((e, index) => {
              return (
                e.account.roles[0].name === "USER" && (
                  <>
                    {
                      <tr key={e.id}>
                        <td>{index}</td>
                        <td>{e.nomComplet}</td>
                        <td>{e.matricule}</td>
                        <td>{e.cin}</td>
                        <td>{e.cnrps}</td>
                        <td>{e.numAssurance}</td>
                        <td>{e.dateDeNaissance}</td>
                        <td>{e.dateEmbauche}</td>
                        <td>{e.soldeConge}</td>
                        <td>{e.fonction}</td>
                        <td>{e.phone}</td>
                        <td>
                          <NavLink
                            to="/ModifierEmployes"
                            state={{ employee: e }}
                            title="Modifier"
                          >
                            <i class="material-icons">&#xE8B8;</i>
                          </NavLink>
                          <span
                            className="delete"
                            title="Delete"
                            onClick={() => {
                              axios
                                .post(
                                  "http://localhost:8080/api/user/delete",
                                  e,
                                  {
                                    Authorization: `Bearer ${localStorage.getItem(
                                      "token"
                                    )}`,
                                  }
                                )
                                .then((r) => {
                                  console.log("employee removed ", r.data);
                                })
                                .catch((err) => console.log(err));
                            }}
                          >
                            <i class="material-icons">&#xE5C9;</i>
                          </span>
                        </td>
                      </tr>
                    }
                  </>
                )
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GestionEmpAdmin;
