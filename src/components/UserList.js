import User from "./User";
import "../stylesheets/components/UserList.scss";

const UserList = (props) => {
  const uElements = props.users.map((user) => {
console.log(user);
    return <li key={user.id}><User user ={user}/></li>
  });
  return (
    <section>
      <ul className="main__list">{uElements}</ul>
    </section>
  );
};

export default UserList;
