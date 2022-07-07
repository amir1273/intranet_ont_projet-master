// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/EmployéPage/Accueil";
import GestionCongés from "./pages/EmployéPage/GestionCongés";
import GestionPrêts from "./pages/EmployéPage/GestionPrêts";
import Profil from "./pages/EmployéPage/Profil";
import AjoutEmp from "./pages/AdminPages/AjoutEmp";
import ModifierEmp from "./pages/AdminPages/ModifierEmp";
import RechercherEmp from "./pages/AdminPages/RechercherEmp";
import SupprimerEmp from "./pages/AdminPages/SupprimerEmp";
import Login from "./pages/Login";
import GestionPretsAdmin from "./pages/AdminPages/GestionPretsAdmin";
import GestionEmpAdmin from "./pages/AdminPages/GestionEmpAdmin";
import GestionCongesAdmin from "./pages/AdminPages/GestionCongesAdmin";
import AjoutDemandeConges from "./pages/EmployéPage/AjoutDemandeConges";
import ModifierProfil from "./pages/EmployéPage/ModifierProfil";
import ModifierConge from "./pages/EmployéPage/ModifierConge";
import Dashboard from "./pages/AdminPages/Dashboard";
import { useUpdateUser, useUser } from "./context/UserContext";
import AjoutdemandePret from "./pages/EmployéPage/AjoutdemandePret";
import ModifierPret from "./pages/EmployéPage/ModifierPret";

const App = () => {

  const [auth, setAuth] = useState()
  const user = useUser();
  console.log("context", user);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("user")));
    return () => { };
  }, [user]);
  return (
    <BrowserRouter>
      {auth?.account.roles[0].name === "USER" ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/GestionConges" element={<GestionCongés />} />
          <Route path="/GestionPrets" element={<GestionPrêts />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/AjoutDemandeConges" element={<AjoutDemandeConges />} />
          <Route path="/AjoutDemandePret" element={<AjoutdemandePret />} />
          <Route path="/ModifierProfil" element={<ModifierProfil />} />
          <Route path="/ModifierConge" element={<ModifierConge />} />
          <Route path="/ModifierPret" element={<ModifierPret />} />
          <Route path="/*" element={<Accueil />} />
        </Routes>
      ) : auth?.account.roles[0].name === "ADMIN" ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/*" element={<Accueil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AjoutEmployes" element={<AjoutEmp />} />
          <Route path="/ModifierEmployes" element={<ModifierEmp />} />
          <Route path="/RechercherEmployes" element={<RechercherEmp />} />
          <Route path="/SupprimerEmployes" element={<SupprimerEmp />} />
          <Route path="/GestionCongesAdmin" element={<GestionCongesAdmin />} />
          <Route path="/GestionEmpAdmin" element={<GestionEmpAdmin />} />
          <Route path="/GestionPretsAdmin" element={<GestionPretsAdmin />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
export default App;
