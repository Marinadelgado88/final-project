import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import "../stylesheets/components/Filters.scss";
import Reset from "./Reset";

const Filters = (props) => {

  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
      <FilterByName name={props.name} handleFilter={props.handleFilter} />
        <FilterByGender handleFilter={props.handleFilter}  />
        <Reset resetHandler={props.resetHandler} />
      </div>
    </div>
  );
};
export default Filters;
