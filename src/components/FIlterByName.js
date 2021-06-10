import '../stylesheets/components/UserDetail.scss';
const FilterByName = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="h1" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="h1"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
