import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import Footer from "./Footer";
console.log(getDataFromApi());
const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "gender") {
      setGender(inputChange.value);
    } else if (inputChange.key === "location") {
      const indexCity = cities.indexOf(inputChange.value);
      if (indexCity === -1) {
        const newCities = [...cities, inputChange.value];
        setCities(newCities);
      } else {
        const newCities = cities.filter((city) => {
          return city !== inputChange.value;
        });
        setCities(newCities);
      }
      console.log(indexCity);
    }
  };
  console.log(cities);
  const filterUsers = users
    .filter((user) => {
      return user.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((user) => {
      return gender === "all" ? true : user.gender === gender;
    })
    .filter((user) => {
      if (cities.length === 0) {
        return true;
      } else {
        return cities.includes(user.city);
      }
    });

  const getCities = () => {
    return users.map((user) => user.city);
  };

  const renderDetail = (props) => {
    const id = props.match.params.id;
    const selectUser = users.find((user) => {
      return user.id === id;
    });
    return <UserDetail user={selectUser} />;
  };
  return (
    <>
      <Header />
  
        <Switch>
          <Route path="/user/:id" render={renderDetail} />
          <Route exact path='/'>
          <Filters handleFilter={handleFilter} cities={getCities()} />
          <UserList users={filterUsers} />
          </Route>
        </Switch>
        <Footer />
    
    </>
  );
};
export default App;
