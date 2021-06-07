import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import UserList from "./UserList";
import Footer from "./Footer";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/components/App.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");


  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);
  const handleFilter = ( inputChange )=>{

    if(inputChange.key==='name'){
      setName(inputChange.value);
    }
    else  if(inputChange.key==='gender'){
      setGender(inputChange.value);
    }
  };
  const filterUsers = users.filter(user => {return user.name.toUpperCase().includes(name.toUpperCase())}).filter(user => {
    if(gender === 'all'){
      return true;
    }
    else{
      return user.gender===gender;
    }
  });
  return (
    <>
      <h1 className="tittle">Directorio de personas</h1>
      <div>
        <Filters handleFilter={handleFilter} />
        <UserList users={filterUsers} />
      </div>
      <Footer />
    </>
  );
};

export default App;
