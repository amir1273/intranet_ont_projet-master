import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavigationAdmin from "../../components/NavigationAdmin";
import { useNavigate } from "react-router";
import axios from "axios";

function Dashboard() {
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
    <div>
      <Logo />
      <NavigationAdmin />
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
