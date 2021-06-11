import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheets/components/User.scss";

import Mujer from "../images/Mujer.png";
import Hombre from "../images/Hombre.png";

const User = (props) => {
  const getGender = () => {
    if (props.user.gender === "female") {
      return Mujer;
    } else if (props.user.gender === "male") {
      return Hombre;
    }
  };

  return (
    <li>
      <Link
        title="Ir a detalle del usuario"
        className="main__list-link"
        to={`/user/${props.user.id}`}
      >
        <article className="main__list-article">
          <h4 className="main__list-articleName">{props.user.name}</h4>
          <img
            className="main__list-articleImg"
            src={props.user.image}
            alt={`Foto de ${props.user.name}`}
            title={`Foto de ${props.user.name}`}
          />
          <img
            className="icons__box--icon"
            src={getGender()}
            alt={`${props.user.gender} icon`}
          ></img>
          <p  className="icons__box--text">{props.user.city}</p>
        </article>
      </Link>
    </li>
  );
};
User.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
};
export default User;
