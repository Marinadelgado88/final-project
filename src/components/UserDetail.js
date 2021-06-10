import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/components/UserDetail.scss";
import "../stylesheets/components/Main.scss";
const UserDetail = (props) => {
  return (
    <>  
    <div className="card">
      <Link className="card-link" title="Volver a resultados" to="/">
        Volver
      </Link>
    
        <img
          className="card-img-top"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
        />

        <ul className="card-body">
          <li className="">
            <h2 className="card-title">{props.user.name} </h2>
            <h5 className="card-text">Email: {props.user.email}</h5>
            <h5 className="card-text">Nick: {props.user.username}</h5>
            <h5 className="card-text">Ciudad: {props.user.city}</h5>
            <h5 className="card-text">País:{props.user.country}</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDetail;
