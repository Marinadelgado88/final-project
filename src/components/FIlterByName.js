import '../stylesheets/components/FilterByName.scss';
const FilterByName = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });
  };
  return (
    <>
    <div class="search__container">
    <p class="search__title">
       Busca por nombre 
    </p>
      <input
        className="search__input"
        type="text"
        name="name"
        id="name"
        placeholder="Busca aquí"
        onChange={handleChange}
        
      />
      </div>
    </>
  );
};
export default FilterByName;
