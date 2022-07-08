import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { useUpdateUser, useUser } from "../context/UserContext";
import Notification from "../pages/EmployéPage/Notification";

const Logo = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const updateUser = useUpdateUser();
  const user = useUser();
  const [u, setU] = useState(user);
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("user")));
    return () => { };
  }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    updateUser({});
    navigate("/login");
  };
  return (
    <div>
      <div className="logo">
        <NavLink
          to="/Accueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <img title="ONT" src="./logoOnt.jpg" alt="logo react" />
        </NavLink>
        <NavLink
          to="/Accueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <h4>Office National de la Télédiffusion</h4>
        </NavLink>
        <div>
          <div className="userInfo">
            {auth?.account.roles[0].name === "USER" ? (
              <>
                <span>
                  <i title="Notification" class="fa fa-bell" onClick={() => setToggle(!toggle)}></i>
                </span>
                <span>
                  <NavLink
                    to="/Profil"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                  >
                    <i title="Profil" class="fa fa-user"></i>
                  </NavLink>
                </span>
                <span onClick={logout}>
                  <i
                    title="Déconnexion"
                    class="fa fa-arrow-right-from-bracket"
                  ></i>
                </span>


                {
                  toggle && <Notification />
                }

              </>
            ) : auth?.account.roles[0].name === "ADMIN" ? (
              <>
                <span onClick={logout}>
                  <i
                    title="déconnexion"
                    class="fa fa-arrow-right-from-bracket"
                  ></i>
                </span>
              </>
            ) : (
              <>loading ...</>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};

export default Logo;
