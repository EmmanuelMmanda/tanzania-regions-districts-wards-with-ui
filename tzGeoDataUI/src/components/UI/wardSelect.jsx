import allWards from "../wards";

const wardData = allWards();

const WardSelect = (props) => {
  return (
    <select name="ward" id="ward" onChange={props.onChange}>
      <option value="">Select ward</option>
      {wardData.map((ward, id) => {
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
