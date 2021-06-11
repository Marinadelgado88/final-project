import User from "./User";
import "../stylesheets/components/UserList.scss";

const UserList = (props) => {
  const uElements = props.users.map((user) => {
    return (
      <li className="main__list-item" key={user.id}>
        {" "}
        <User user={user} />
      </li>
    );
    
  });
  if (uElements.length !== 0) {
    return <ul className="main__list">{uElements}</ul>;
  } else if (props.user === undefined) {
    return (
      <section className="section">
        <h2 className="main__errorMessage">
          {''}
          No hay ningún usuario que coincida con esa palabra {props.name}
        </h2>
      </section>
    );
  }
};
export default UserList;
