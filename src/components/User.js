import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/components/User.scss';

const User = props => {
  const getGender = () => {
    if (props.user.gender === 'female') {
      return 'Mujer';
    } else if (props.user.gender === 'male') {
      return 'Hombre';
    } else {
      return 'No binario';
    }
  };

  return (
    
    <li>
      <Link
        title='Ir a detalle del usuario'
        className='main__list-link'
        to={`/user/${props.user.id}`}
      >
        <article className='main__list-article'>
        <img  className='main__list-articleImg' src={props.user.image} alt={`Foto de ${props.user.name}`} title={`Foto de ${props.user.name}`} />
        <h4 className='main__list-articleName'>{props.user.name}</h4>
        <p className="card__description">
          {props.user.city} / {getGender()}
        </p>
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