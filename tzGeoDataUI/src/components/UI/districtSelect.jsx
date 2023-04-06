import alldistrict from "../Districts";

const districtData = alldistrict();

const DistrictSelect = (props) => {
  return (
    <select name="district" id="district" onChange={props.onChange}>
      <option value="">Select district</option>
      {districtData.map((district, id) => {
        return (
          <option value={district} key={id}>
            {district}
          </option>
        );
      })}
    </select>
  );
};

export default DistrictSelect;
