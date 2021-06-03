import "../App.css";
import Filters from './Filters';
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Directorio de personas</h1>
      </header>
      <Filters />
      <UserList />
    </div>
  );
}

export default App;
