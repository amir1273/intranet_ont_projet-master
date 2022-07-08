import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import NavigationAdmin from "../../components/NavigationAdmin";
import { useUpdateUser, useUser } from "../../context/UserContext";
import Notification from "./Notification";

const Accueil = () => {

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const updateUser = useUpdateUser();
  const user = useUser();
  const [u, setU] = useState(user);
  console.log("context", user);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("user")));
    return () => { };
  }, [user]);


  return (
    <div>
      {auth?.account.roles[0].name === "USER" ?
        (<>
          <Logo />
          <Navigation />
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item  active">
                <img
                  className="d-block w-100"
                  src="./caroussel-4.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 "
                  src="./caroussel-2.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./caroussel-3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </>) :
        <>
          <div>
            <Logo />
            <NavigationAdmin />
            <h1>Dashboard Admin</h1>
          </div>
        </>
      }
    </div>
  );
};

export default Accueil;
