const User = (props) => {
  return (
    <>
      <img src={props.user.image} alt="Foto del usuario" />
      <h4>
        {props.user.name}
      </h4>
      <h4>
        {props.user.lastname}
      </h4>
      <p>
        {props.user.city}/{props.user.gender}
      </p>
    </>
  );
};

export default User;
