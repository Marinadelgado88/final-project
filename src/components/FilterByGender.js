import '../stylesheets/components/FilterByGender.scss';
const FilterByGender = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "gender",
      value: e.target.value,
    });
  };
  return (
    <>
       <div class="search__container">
    <p class="search__title">
   Selecciona el género
    </p>
      <select className="search__input"  onChange={handleChange}>
        <option className="search__input" value="all">
          Todos
        </option>
        <option className="search__input" value="female">
          Mujer
        </option>
        <option className="search__input" value="male">
          Hombre
        </option>
      </select>
      </div>
    </>
  );
};
export default FilterByGender;
