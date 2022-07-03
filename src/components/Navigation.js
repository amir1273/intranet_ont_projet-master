import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");
    const [role, setRole] = useState("");
    useEffect(() => {
        getUserInfo()

        return () => {

        }
    }, [token, username, role])

    const getUserInfo = () => {
        const url = `http://localhost:8080/api/user/info/${username}`;
        let options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            url,
        };
        axios(options)
            .then(({ data }) => {
                console.log(data);
                setUser(data);
                setRole(data.account.roles[0].name);
                console.log("role: ", role);
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("role", role);
            })
            .catch((er) => {
                console.log("no data sorry ", er);
            });
    }

    return (
        <div className="navigation">
            <ul>
                {role === "USER" ? (
                    <>
                        <NavLink
                            to="/"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink
                            to="/GestionConges"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            <li>Gestion des Congés</li>
                        </NavLink>
                        <NavLink
                            to="/GestionPrêts"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            <li>Gestion des Prêts</li>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/GestionEmpAdmin"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            <li>Administrateur</li>
                        </NavLink>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navigation;
