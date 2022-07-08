import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUpdateUser, useUser } from "../../context/UserContext";

const Notification = () => {
    // const [user, setUser] = useState()
    const [notification, setNotification] = useState([])
    const updateUser = useUpdateUser();
    const user = useUser();
    useEffect(() => {
        console.log("notif user >>", user);
        const getNotifs = () => {
            axios
                .get(
                    `http://localhost:8080/api/notifications/${user.matricule}`,
                    {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                )
                .then((r) => {
                    setNotification(r.data);

                })
                .catch((err) => console.log(err));
        }
        getNotifs();

        return () => {

        }
    }, [])

    return (
        <div className='container-fluid ' >
            {
                notification?.length === 0 ?
                    (<p> pas de notification!</p>)
                    :
                    (<>
                        <div className="card">
                            <div className="card-header">
                                <h6>Les dérnieres notifications de {user.nomComplet}</h6>
                            </div>
                            <div className="card-body ">
                                {
                                    notification.map(n => {
                                        return (
                                            <>
                                                <div className="row ">
                                                    <h6>
                                                        {n.statut === "Accepté" ? <i class="fa fa-check text-success" aria-hidden="true"></i> : <i class="fa fa-times text-danger" aria-hidden="true"></i>


                                                        }
                                                        {n.note}
                                                    </h6>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </>)
            }
        </div>
    );
};

export default Notification;