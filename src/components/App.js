
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Directorio de personas</h1>
    <section>
      <form action="">
        <label htmlFor="name"> Filtrar por nombre</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="gender">Género:</label>
        <select name="gender" id="gender">
          <option value="all">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
        <label htmlFor="city"> Ciudad:</label>
          <input type="text" name="city" id="city" />
          
       
      </form>
    </section>
    <section>
      <ul></ul>
      <li>
        <img src="" alt="" />
        <h4>Nombre y Apellidos</h4>
        <p>ciudad/genero</p>
      </li>
    </section>
       
      </header>
    </div>
  );
}

export default App;
