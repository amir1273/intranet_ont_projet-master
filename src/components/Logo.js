import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

const Logo = () => {
  const navigate = useNavigate();
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
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    window.location.reload(false);
    navigate("/");

  };
  return (
    <div>
      <div className="logo">
        <NavLink to="/Accueil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <img title="ONT" src="./logoOnt.jpg" alt="logo react" />
        </NavLink>
        <NavLink to="/Accueil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <h4>Office National de la Télédiffusion</h4>
        </NavLink>
        <div>
          <div className="userInfo">
            {role === "USER" && (
              <>
                <span>
                  <i title="Notification" class="fa fa-bell"></i>
                </span>
                <span>
                  <NavLink
                    to="/Profil"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <i title="Profil" class="fa fa-user"></i>
                  </NavLink>
                </span>
              </>
            )}
            <span onClick={logout}>
              <i title="déconnexion" class="fa fa-arrow-right-from-bracket"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
