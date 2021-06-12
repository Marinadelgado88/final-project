import '../stylesheets/components/FilterByName.scss';
import PropTypes from "prop-types";

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
FilterByName.propTypes = {
  name: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default FilterByName;
