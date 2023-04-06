import { forEach } from "lodash";
import wardFile from "./Countries/Tanzania/Wards.json"


export default function allWards () {
    try {
      const data = wardFile;
    let wards = [];
    forEach(data["features"], (districtObject) => {
      wards.push(districtObject["properties"]["Ward"]);
    });
    return wards
    } catch(err) {
      console.error(err);
    }
  }


  export function wardsPerDistrict(district) {
    try {
      const data = wardFile;
      let wards = [];
      forEach(data["features"], (districtObj) => {
        if (districtObj.properties.District.toLowerCase().includes(district.toLowerCase())) {
          wards.push(districtObj["properties"]["Ward"]);
        }
      });
      return wards
    } catch(err) {
      console.log(err);
    }
  }