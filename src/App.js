// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Assurances from "./pages/Assurances";
import GestionCongés from "./pages/GestionCongés";
import GestionPrêts from "./pages/GestionPrêts";
import Profil from "./pages/Profil";
import AjoutEmp from "./pages/AdminPages/AjoutEmp";
import ModifierEmp from "./pages/AdminPages/ModifierEmp";
import RechercherEmp from "./pages/AdminPages/RechercherEmp";
import SupprimerEmp from "./pages/AdminPages/SupprimerEmp";
import Login from "./pages/Login";
import GestionPretsAdmin from "./pages/AdminPages/GestionPretsAdmin";
import GestionEmpAdmin from "./pages/AdminPages/GestionEmpAdmin";
import GestionCongesAdmin from "./pages/AdminPages/GestionCongesAdmin";
import AjoutDemandeConges from "./pages/AjoutDemandeConges";
import ModifierProfil from "./pages/ModifierProfil";
import Dashboard from "./pages/AdminPages/Dashboard";
// import axios from 'axios';

const App = () => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get("http://localhost:8080/employees")
  //     .then(r => { console.log(r.data); setData(r.data) })
  //     .catch((err => console.log(err)))

  // }, []);
  // const [role, setRole] = useState("");
  // useEffect(() => {
  //   setRole(localStorage.getItem("role"));
  //   console.log(role);
  //   return () => {};
  // }, [role]);

  return (
    <BrowserRouter>
      <Routes>
        {/* {role === "ADMIN" && (
          <> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AjoutEmployes" element={<AjoutEmp />} />
        <Route path="/ModifierEmployes" element={<ModifierEmp />} />
        <Route path="/RechercherEmployes" element={<RechercherEmp />} />
        <Route path="/SupprimerEmployes" element={<SupprimerEmp />} />
        <Route path="/GestionCongesAdmin" element={<GestionCongesAdmin />} />
        <Route path="/GestionEmpAdmin" element={<GestionEmpAdmin />} />
        <Route path="/GestionPretsAdmin" element={<GestionPretsAdmin />} />
        {/* </>
        )}
        {role === "USER" && (
          <> */}
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Assurance" element={<Assurances />} />
        <Route path="/GestionConges" element={<GestionCongés />} />
        <Route path="/GestionPrets" element={<GestionPrêts />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/AjoutDemandeConges" element={<AjoutDemandeConges />} />
        <Route path="/ModifierProfil" element={<ModifierProfil />} />
        <Route path="/*" element={<Accueil />} />
        {/* </>
        )} */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
