import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import "../stylesheets/components/Filters.scss";
import '../stylesheets/components/UserDetail.scss';
const Filters = (props) => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
       
                <FilterByName handleFilter={props.handleFilter} />
                <FilterByGender handleFilter={props.handleFilter} />
      
      </div>
    </div>
  );
};
export default Filters;
