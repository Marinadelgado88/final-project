import FilterByName from "./FIlterByName";
import FilertByGender from "./FilterByGender";
import FilterByCities from "./FilterByCities";
const Filters = (props) => {
  return (
    <section>
      <form action="">
        <FilterByName />
        <FilertByGender />
        <FilterByCities />
      </form>
    </section>
  );
};

export default Filters;
