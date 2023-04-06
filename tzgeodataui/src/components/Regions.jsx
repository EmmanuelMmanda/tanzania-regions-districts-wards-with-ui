// import { join } from 'path';
import { forEach } from "lodash";
import { readFileSync } from "jsonfile";
import Regionfile  from "./Countries/Tanzania/Regions.json";


export default function regions () {
  try {
    const data = Regionfile
    let Regions = [];
    forEach(data["features"], (regionObject) => { 
          Regions.push(regionObject["properties"]["region"]);
        });
    return Regions
  } catch(err) {
    console.error(err);
  }
}