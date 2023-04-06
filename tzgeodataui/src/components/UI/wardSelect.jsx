import allWards from "../wards";
import { wardsPerDistrict } from "../wards";


const WardSelect = (props) => {
  const data =
    props.district == ""
      ? allWards()
      : wardsPerDistrict(props.district.toString());

  return (
    <select name="ward" id="ward" onChange={props.onChange}>
      <option value="">Select ward</option>
      {data.map((ward, id) => {
        return (
          <option key={id} value={ward}>
            {ward}
          </option>
        );
      })}
    </select>
  );
};

export default WardSelect;
