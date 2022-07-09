import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router";

const ModifierProfil = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [phone, setPhone] = useState();
  const [file, setFile] = useState({});
  const [picture, setPicture] = useState({});

  const navigate = useNavigate();
  const [message, setMessage] = useState("")
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setPhone(user.phone)
    console.log(user);

    return () => { };
  }, []);

  //   const updateUser = () => {
  //     axios
  //       .post(http://localhost:8080/user/update/${phone}, user, {
  //         Authorization: Bearer ${localStorage.getItem("token")},
  //       })
  //       .then((r) => {
  //         console.log("sucess", r);
  //         //update user info
  //         getUserInfo();
  //         navigate("/profil");
  //       })
  //       .catch((err) => console.log(err));
  //   };
  const uploadPicture = (e) => {
    setPicture({
      picturePreview: URL.createObjectURL(e.target.files[0]),
      pictureAsFile: e.target.files[0],
    });
  };

  const updateUser = () => {
    if (phone.length == 8) {
      axios
        .post(`http://localhost:8080/user/update/${phone}`, user, {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        })
        .then((r) => {
          console.log("sucess", r);
          //update user info
          setMessage("Modification Effectuer avec succès !!");
          getUserInfo();
          // navigate("/profil");
        })
        .catch((err) => console.log(err));
      setMessage("error!");
    }
    else {
      setMessage('téléphone invalide')
    }
    const formData = new FormData();
    formData.append("file", picture.pictureAsFile);

    axios
      .post(
        `http://localhost:8080/user/update/photo/${user.matricule}`,
        formData,
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      )
      .then((r) => {
        console.log("sucess", r);
        //update user info
        getUserInfo();
        // navigate("/profil");
      })
      .catch((err) => console.log(err));
  };
  const getUserInfo = () => {
    axios
      .get(
        `http://localhost:8080/api/user/info/${localStorage.getItem(
          "username"
        )}`,
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        })
      .then((r) => {
        localStorage.setItem("user", JSON.stringify(r.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Logo />
      <h1>Profil</h1>
      <div className="containerP">
        <div className="title">Modifier Profil Employé : </div>
        <div className="content">
          <form enctype="multipart/form-data">
            <div class="profile-pic">
              <label class="-label" for="file">
                <span class="glyphicon glyphicon-camera"></span>
                <span>Changer Image</span>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                onChange={uploadPicture}
              />
              <img src={picture.picturePreview} alt="imageProfil" width="200" />
            </div>
            <div className="form">
              <div className="user-details">
                <div className="output-box">
                  <span className="details">Matricule Employé </span>
                  <span className="output" name="matricule">
                    {user.matricule}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Nom et Prénom </span>
                  <span className="output" name="nomComplet">
                    {user.nomComplet}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">CIN </span>
                  <span className="output" name="cin">
                    {user.cin}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">CNRPS </span>
                  <span className="output" name="cnrps">
                    {user.cnrps}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Numéro d'Assurance </span>
                  <span className="output" name="numAssurance">
                    {user.numAssurance}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Date de Naissance </span>
                  <span className="output" name="dateNaissance">
                    {user.dateDeNaissance}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Date d'Embauche </span>
                  <span className="output" name="matricule">
                    {user.dateEmbauche}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Fonction </span>
                  <span className="output" name="fonction">
                    {user.fonction}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Solde Congé </span>
                  <span className="output" name="soldeConge">
                    {user.soldeConge}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Genre </span>
                  <span className="output" name="genre">
                    {user.genre}
                  </span>
                </div>
                <div className="output-box">
                  <span className="details">Numéro de Téléphone </span>
                  <input
                    className="output"
                    type="text"
                    name="telephone"
                    placeholder="99999999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {<div className="text-center"><span className="text-danger">{message}</span></div>

            }
            <div className="buttonC">
              <input
                className="buttonB"
                type="button"
                value="Enregistrer Les Modifications"
                onClick={updateUser}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifierProfil;