
const FilterByGender = (props) => {
  return (
      <>
    <label htmlFor="gender">Género:</label>
        <select name="gender" id="gender">
          <option value="all">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
      </>  
  );
};

export default FilterByGender;
