import React from "react";
import { Link } from "react-router-dom";

const UserDetail = (props) => {
  return (
    <article>
      <Link className="main__detail-link" title="Volver a resultados" to="/">
        Volver
      </Link>
      <img
        className="card__img"
        src={props.user.image} 
        alt={`Foto de ${props.user.name}`}
      />
      <ul className="ml-1 mt-1">
        <li>Género:{props.user.gender} </li>
        <li>Email: {props.user.email}</li>
        <li>Nick: {props.user.username}</li>
        <li>Ciudad: {props.user.city}</li>
        <li>País:{props.user.country}</li>
      </ul>
    </article>
  );
};

export default UserDetail;
