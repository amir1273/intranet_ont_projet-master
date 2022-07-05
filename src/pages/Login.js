import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../styles/components/_Login.css";
import { useUpdateUser, useUser } from "../context/UserContext";

import qs from "qs";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  // const user = { username, password }
  const navigate = useNavigate();
  const updateUser = useUpdateUser();
  const user = useUser();
  useEffect(() => {
    const t = localStorage.getItem("token");
    setToken(t);
    if (t) {
      navigate("/");
    }
    return () => {};
  }, [token]);

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/login";
    let user = {
      username,
      password,
    };
    let options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(user),
      url,
    };
    axios(options)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("username", username);

        setToken(data.access_token);
        getUserInfo();
        navigate("/");
      })
      .catch((er) => {
        setError(true);
        console.log("no data sorry ", er);
      });
  };
  const getUserInfo = () => {
    axios
      .get(
        `http://localhost:8080/api/user/info/${localStorage.getItem(
          "username"
        )}`,
        { Authorization: `Bearer ${localStorage.getItem("token")}` }
      )
      .then((r) => {
        localStorage.setItem("user", JSON.stringify(r.data));
        updateUser(r.data);
        console.log("r.data ?", r.data);
        console.log("props updated ?", user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login-class">
      <div className="wrapper">
        <div className="title">Espace des Employés de L'ONT</div>
        <form action="#">
          <div className="field">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Matricule</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Mot de Passe</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          {error && (
            <>
              <label className="pl-4  text-danger">
                matricule ou mot de passe incorrect!
              </label>
            </>
          )}
          <div className="field">
            <input
              type="submit"
              value="Se connecter"
              onClick={handleLogin}
              // onClick={() => navigate("/")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
