import React, { useState } from "react";
import "../CSS/rm.css";

function Rm() {
  const [rmvalues, setRmValues] = useState({
    weight: `${
      isNaN(parseFloat(localStorage.getItem("Weight")))
        ? 0
        : parseFloat(localStorage.getItem("Weight"))
    }`,
    reps: `${
      isNaN(parseFloat(localStorage.getItem("Reps")))
        ? 0
        : parseFloat(localStorage.getItem("Reps"))
    }`,
  });

  const value_handler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newValues = {
      ...rmvalues,
      [name]: value,
    };
    setRmValues(newValues);
    calc_total(newValues);
  };

  const [rmTotal, setRmTotal] = useState(
    isNaN(parseFloat(localStorage.getItem("RmTotal")))
      ? 0
      : parseFloat(localStorage.getItem("RmTotal"))
  );

  const calc_total = (newValues) => {
    const { weight, reps } = newValues;

    if (weight > 650) {
      const newValuesIf = {
        ...rmvalues,
        weight: 650,
      };
      console.log(newValuesIf);
      setRmValues(newValuesIf);
      return calc_total(newValuesIf);
    } else if (reps > 12) {
      const newValuesElse = {
        ...rmvalues,
        reps: 12,
      };
      console.log(newValuesElse);
      setRmValues(newValuesElse);
      return calc_total(newValuesElse);
    }

    let op1 = reps * 2.5;
    let op2 = 100 - op1;
    let op3 = op2 / 100;
    let op4 = weight / op3;
    const newTotal = op4.toFixed(1);
    setRmTotal(newTotal);
  };

  const prevent = (evt) => {
    if (evt.key === "e") {
      evt.preventDefault();
    }
  };

  localStorage.setItem("Weight", rmvalues.weight);
  localStorage.setItem("Reps", rmvalues.reps);
  localStorage.setItem("RmTotal", rmTotal);

  return (
    <section>
      <div className="weight__title">
        <span>1RM CALCULATOR</span>
      </div>
      <div className="input-group">
        <span className="input-group-text">Reps:</span>
        <input
          className="form-control"
          name="reps"
          step="1"
          min="0"
          max="1000"
          type="number"
          onKeyDown={prevent}
          value={parseFloat(localStorage.getItem("Reps"))}
          onChange={value_handler}
          placeholder="0"
          pattern="[0-9]+"
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">Weight:</span>
        <input
          className="form-control"
          name="weight"
          type="number"
          onChange={value_handler}
          placeholder="0"
          step="1"
          min="0"
          max="200"
          value={parseFloat(localStorage.getItem("Weight"))}
          onKeyDown={prevent}
          pattern="[0-9]+"
        />
      </div>

      <h2>
        {isNaN(rmTotal) ? 0 : parseFloat(localStorage.getItem("RmTotal"))}
      </h2>
    </section>
  );
}

export default Rm;
