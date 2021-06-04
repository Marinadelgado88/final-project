import "../stylesheets/components/Filters.scss";
const FilterByName = props =>{
  const handleChange =(e)=>{
  props.handleFilter({
    key:'name',
    value:e.target.value
  });
  }
return (
  <>
  <label  className="main__form-label" htmlFor='name'>Filtrar por nombre:</label>
  <input className="main__form-label" type='text' name='name'
  id='name' onChange={handleChange}/>
  </>
)
}
export default FilterByName;
