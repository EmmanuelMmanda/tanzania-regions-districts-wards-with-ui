import regions from "../Regions";

const regionsData = regions();

const RegionSelect = (props) => {
  return (
    <select name="region" id="region"  onChange={props.onChange}>
      <option value="">Select Region</option>
      {regionsData.map((region) => { 
        return (
          <option key={region} value={region}>
            {region}
          </option>
        );
      })}
    </select>
  );
};

export default RegionSelect;
