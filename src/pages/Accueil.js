import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";

const Accueil = () => {
  const [token, setToken] = useState();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const t = localStorage.getItem("token");
    setUsername(localStorage.getItem("username"));
    console.log("token ?", t);

    if (t) {
      setToken(t);

      const url = `http://localhost:8080/api/user/info/${username}`;
      let options = {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
        url,
      };
      axios(options)
        .then(({ data }) => {
          console.log(data);
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((er) => {
          console.log("no data sorry ", er);
        });
    } else navigate("/login");
    return () => { };
  }, [token]);

  return (
    <div>
      <Logo />
      <Navigation />
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img className="d-block w-100" src="./caroussel-1.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 " src="./caroussel-2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./caroussel-3.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./caroussel-4.jpg" alt="fourth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Accueil;
