import { forEach } from "lodash";
import districtFile from "./Countries/Tanzania/Districts.json";

export default function alldistrict() {
  try {
    const data = districtFile;
    let Districts = [];
    forEach(data["features"], (regionObject) => {
      Districts.push(regionObject["properties"]["District"]);
    });
    return Districts;
  } catch (err) {
    console.error(err);
  }
}


export function districtsPerRegion(regionName) {
  try {
    const data = readFileSync(_Districtfile);
    let DistrictsPerRegion = [];
    forEach(data["features"], (regionObject) => {
      if (regionObject["properties"]["region"] == regionName) {
        DistrictsPerRegion.push(regionObject["properties"]["District"]);
      }
    });
    return DistrictsPerRegion;
  } catch (err) {
    console.error(err);
  }
}
