import { useState } from "react";
import alldistrict from "../Districts";
import { districtsPerRegion } from "../Districts";

const DistrictSelect = (props) => {
  const data =
    props.region == ""
      ? alldistrict()
      : districtsPerRegion(props.region.toString() + " Region");

  return (
    <select name="district" id="district" onChange={props.onChange}>
      <option value="">Select district</option>
      {data.map((district, id) => {
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
