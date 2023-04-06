import { useState } from "react";
import "./App.css";
import RegionSelect from "./components/UI/regionSelect";
import WardSelect from "./components/UI/wardSelect";
import DistrictSelect from "./components/UI/districtSelect";

function App() {
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [results, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting", {
      region,
      district,
      ward,
    });
    setResult([
      {
        region,
        district,
        ward,
      },
    ]);
  };

  const regionChangeHandler = (e) => {
    setRegion(e.target.value);
  };
  const wardChangeHandler = (e) => {
    setWard(e.target.value);
  };

  const districtChangeHandler = (e) => {
    setDistrict(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="heading">TANZANIA GEODATA UI </h1>
      <form method="POST">
        <section id="regions">
          <h3>Select Your region</h3>
          <RegionSelect onChange={regionChangeHandler} />
        </section>
        <section id="districts">
          <h3>Select Your District</h3>
          <DistrictSelect onChange={districtChangeHandler} />
        </section>

        <section id="wards">
          <h3>Select Your Ward</h3>
          <WardSelect onChange={wardChangeHandler} />
        </section>
        <section id="form-controls">
          <button type="submit" className="button" onClick={handleSubmit}>
            Submit
          </button>
        </section>
      </form>
      <section>
        <h4 className="results">Results</h4>
        <div className="result-box">
          <code id="">
            <pre>{JSON.stringify(results, undefined, 2)}</pre>
          </code>
        </div>
      </section>
    </div>
  );
}

export default App;
