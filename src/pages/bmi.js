import React, { useState, useEffect, useRef } from "react";
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

  const radioMale = useRef(false);
  const radioFemale = useRef(false);

  const [sex, setSex] = useState(
    localStorage.getItem("sex") === true ? "" : localStorage.getItem("sex")
  );

  const [category, setCategory] = useState(
    localStorage.getItem("category") === null
      ? ""
      : localStorage.getItem("category")
  );

  function male() {
    setSex(true);
    console.log("male", sex);
  }

  function female() {
    setSex(false);
    console.log("female", sex);
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
    isNaN(parseFloat(localStorage.getItem("totalBmi")))
      ? 0
      : parseFloat(localStorage.getItem("totalBmi"))
  );

  const calc_total = (newValues) => {
    const { mass, height } = newValues;
    let heightQ = height * height;
    let opBmi = (mass / heightQ) * 10000;
    if (opBmi === Infinity) {
      opBmi = 0;
    }
    const newTotal = opBmi.toFixed(1);

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
    setCategory("");
    radioFemale.current.checked = false;
    radioMale.current.checked = false;
  };

  useEffect(() => {
    if (sex === true && totalBmi === 0) {
      return setCategory("");
    }
    if (sex === false && totalBmi === 0) {
      return setCategory("");
    }
    if (sex === true && totalBmi === null) {
      return setCategory("");
    }

    if (sex === false && totalBmi === null) {
      return setCategory("");
    }
    if (sex === true && totalBmi === undefined) {
      return setCategory("");
    }

    if (sex === false && totalBmi === undefined) {
      return setCategory("");
    }

    if (sex === true && totalBmi < 18.5) {
      return setCategory("Underweight");
    }
    if (sex === true && totalBmi >= 18.5 && totalBmi <= 24.9) {
      return setCategory("Normal Weight");
    }
    if (sex === true && totalBmi >= 25 && totalBmi <= 29.9) {
      return setCategory("Overweight");
    }
    if (sex === true && totalBmi >= 30 && totalBmi <= 34.9) {
      return setCategory("Severe Overweight");
    }
    if (sex === true && totalBmi > 35) {
      return setCategory("Obesity");
    }

    if (sex === false && totalBmi < 17.5) {
      return setCategory("Underweight");
    }
    if (sex === false && totalBmi >= 17.5 && totalBmi <= 24) {
      return setCategory("Normal Weight");
    }
    if (sex === false && totalBmi >= 24 && totalBmi <= 29) {
      return setCategory("Overweight");
    }
    if (sex === false && totalBmi >= 29 && totalBmi <= 34) {
      return setCategory("Severe Overweight");
    }
    if (sex === false && totalBmi > 34) {
      return setCategory("Obesity");
    }
  }, [sex, totalBmi]);

  localStorage.setItem("mass", bmi.mass);
  localStorage.setItem("height", bmi.height);
  localStorage.setItem("totalBmi", totalBmi);
  localStorage.setItem("sex", sex);
  localStorage.setItem("category", category);

  return (
    <div className="bmi__container">
      <div className="bmi__components">
        <div className="global__title">
          <span>BMI CALCULATOR</span>
        </div>
        <div className="radio__bmi">
          <div className="form-check singleRadio__bmi">
            <input
              ref={radioMale}
              name="gender"
              className="form-check-input"
              type="radio"
              id="flexRadioDefault1"
              onChange={male}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check singleRadio__bmi">
            <input
              ref={radioFemale}
              name="gender"
              className="form-check-input"
              type="radio"
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
            value={
              parseFloat(localStorage.getItem("mass")) === 0
                ? undefined
                : parseFloat(localStorage.getItem("mass"))
            }
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
            value={
              parseFloat(localStorage.getItem("height")) === 0
                ? undefined
                : parseFloat(localStorage.getItem("height"))
            }
            onChange={bmiValueHandler}
            placeholder="0"
            pattern="[0-9]+"
          />
          <span className="input-group-text">cm</span>
        </div>

        <div className="bmi__resultBMI">
          <span>BMI</span>
        </div>
        <div className="bmi__total">
          {isNaN(totalBmi) ? 0 : parseFloat(localStorage.getItem("totalBmi"))}
        </div>
        {/* <div className="bmi__resultBMI">
          <span>CATEGORY</span>
        </div> */}
        <div className="bmi__category">
          {category === "" ? "" : localStorage.getItem("category")}
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
