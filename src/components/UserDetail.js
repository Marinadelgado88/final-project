import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/components/UserDetail.scss";
const UserDetail = (props) => {
  return (
    <>
      <article className="main">
        <Link className="card-link" title="Volver a resultados" to="/">
          Volver
        </Link>

        <div className="card ">
          <img
            className="card-img-top "
            src={props.user.image}
            alt={`Foto de ${props.user.name}`}
          />
          <ul className="card-body">
            <li className="">
              <h2 className="card-title">{props.user.name} </h2>
              <h5 className="card-text">{props.user.email}</h5>
              <h5 className="card-text">{props.user.city}</h5>
              <h5 className="card-text">{props.user.country}</h5>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default UserDetail;
