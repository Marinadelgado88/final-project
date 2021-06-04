
const FilterByCities = (props) => {
  return (
    <>
        <label className="main__form-label"  htmlFor="city"> Ciudad:</label>
        <input className="main__form-input" 
        placeholder="Ej.Madrid" 
        type="text" name="city" id="city" />
     </>
  );
};

export default FilterByCities;
