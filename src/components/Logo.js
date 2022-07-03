import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login");
  };
  return (
    <div>
      <div className="logo">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <img src="./logoOnt.jpg" alt="logo react" />
        </NavLink>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <h4>Office National de la Télédiffusion</h4>
        </NavLink>
        <div>
          <div className="userInfo">
            <span>
              <i class="fa fa-bell"></i>
            </span>
            <span>
              <NavLink
                to="/Profil"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <i class="fa fa-user"></i>
              </NavLink>
            </span>
            <span onClick={logout}>
              <i class="fa fa-arrow-right-from-bracket"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
