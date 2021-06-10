import '../stylesheets/components/UserDetail.scss';
const FilterByGender = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "gender",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="h1" htmlFor="gender">
        Género:
      </label>
      <select className="p" name="gender" id="gender" onChange={handleChange}>
        <option className="p" value="all">
          Todos
        </option>
        <option className="p" value="female">
          Mujer
        </option>
        <option className="p" value="male">
          Hombre
        </option>
      </select>
    </>
  );
};
export default FilterByGender;
