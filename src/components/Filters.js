import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import "../stylesheets/components/Filters.scss";
import '../stylesheets/components/UserDetail.scss';
const Filters = (props) => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
              <form>
                <FilterByName handleFilter={props.handleFilter} />
                <FilterByGender handleFilter={props.handleFilter} />
             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
