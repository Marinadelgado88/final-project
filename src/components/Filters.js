import FilterByName from "./FIlterByName";
import FilertByGender from "./FilterByGender";
import FilterByCities from "./FilterByCities";
import "../stylesheets/components/Filters.scss";
const Filters = (props) => {
  return (
    <section className='main'>
      <form className='main__form' action="">
        <FilterByName  handleFilter={props.handleFilter}/>
        <FilertByGender  handleFilter={props.handleFilter} />
        <FilterByCities />
      </form>
    </section>
  );
};

export default Filters;
