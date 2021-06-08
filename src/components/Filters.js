import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import '../stylesheets/components/Filters.scss';

const Filters = (props) => {
  return (
    <div class="welcome-area" id="welcome">
    <div class="header-text">
      <div class="container">
        <div class="row">
          <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
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
