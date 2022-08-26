import React, { useState } from "react";
import "../CSS/bmi.css";

function Bmi() {
  const [bmi, setBmi] = useState({
    mass: `${
      isNaN(parseFloat(localStorage.getItem("mass")))
        ? 0
        : parseFloat(localStorage.getItem("mass"))
    }`,
    height: `${
      isNaN(parseFloat(localStorage.getItem("height")))
        ? 0
        : parseFloat(localStorage.getItem("height"))
    }`,
  });

   const [sex, setSex] = useState(
     localStorage.getItem("sex") === null
       ? true
       : localStorage.getItem("sex")
   );

    function male() {
      setSex(true);

      console.log("male");
    }

    function female() {
      setSex(false);
   
      console.log("female");
    }

  const bmiValueHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newValues = {
      ...bmi,
      [name]: value,
    };
    setBmi(newValues);
    calc_total(newValues);
  };

  const [totalBmi, setTotalBmi] = useState(
    isNaN(parseFloat(localStorage.getItem("Total")))
      ? 0
      : parseFloat(localStorage.getItem("Total"))
  );

  const calc_total = (newValues) => {
    const { mass, height } = newValues;

    let opBmi = mass / (height * height);
    const newTotal = opBmi.toFixed(2);
    setTotalBmi(newTotal);
  };

  const prevent = (evt) => {
    if (evt.key === "e") {
      evt.preventDefault();
    }
  };

  const bmiReset = () => {
    setBmi(0);
    setTotalBmi(0);
  };

  localStorage.setItem("mass", bmi.mass);
  localStorage.setItem("height", bmi.height);
  localStorage.setItem("Total", totalBmi);
  localStorage.setItem("sex", sex);

  return (
    <div className="bmi__container">
      <div className="bmi__components">
        <div className="global__title">
          <span>BMI CALCULATOR</span>
        </div>
        <div className="radio__bmi">
          <div className="form-check singleRadio__bmi">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={male}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check singleRadio__bmi">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={female}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text">Mass:</span>
          <input
            className="form-control"
            name="mass"
            type="number"
            onChange={bmiValueHandler}
            placeholder="0"
            step="1"
            min="0"
            max="200"
            value={parseFloat(localStorage.getItem("mass"))}
            onKeyDown={prevent}
            pattern="[0-9]+"
          />
          <span className="input-group-text">Kg</span>
        </div>
        <div className="input-group">
          <span className="input-group-text">Height:</span>
          <input
            className="form-control"
            name="height"
            step="1"
            min="0"
            max="1000"
            type="number"
            onKeyDown={prevent}
            value={parseFloat(localStorage.getItem("height"))}
            onChange={bmiValueHandler}
            placeholder="0"
            pattern="[0-9]+"
          />
          <span className="input-group-text">m</span>
        </div>
        <div className="bmi__total">
          {isNaN(totalBmi) ? 0 : parseFloat(localStorage.getItem("Total"))}
        </div>
        <div>
          <button
            className="bmi__reset btn btn-danger btn-lg shadow-none"
            onClick={bmiReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
