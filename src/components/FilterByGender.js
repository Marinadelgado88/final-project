
const FilterByGender = (props) => {
  const handleChange =(e)=>{
    props.handleFilter({
      key:'gender',
      value:e.target.value
    });
    }
  return (
      <>
    <label className="main__form-label"  htmlFor="gender" >Género:</label>
        <select name="gender" id="gender" className="main__form-input" onChange={handleChange}>
          <option value="all">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
      </>  
  );
};

export default FilterByGender;
