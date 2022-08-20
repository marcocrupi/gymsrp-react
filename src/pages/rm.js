import React, { useState } from "react";
import "../CSS/rm.css";

function Rm() {
  const [values, setValues] = useState({
    weight: "",
    reps: "",
  });

  const value_handler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    calc_total(newValues);
  };

  const [total, set_total] = useState(0);

  const calc_total = (newValues) => {
    const { weight, reps } = newValues;

    if (weight > 650) {
      const newValuesIf = {
        ...values,
        weight: 650,
      };
      console.log(newValuesIf);
      setValues(newValuesIf);
      return calc_total(newValuesIf);
    } else if (reps > 12) {
      const newValuesElse = {
        ...values,
        reps: 12,
      };
      console.log(newValuesElse);
      setValues(newValuesElse);
      return calc_total(newValuesElse);
    }

    let op1 = reps * 2.5;
    let op2 = 100 - op1;
    let op3 = op2/100;
    let op4 = weight / op3;
    const newTotal = op4.toFixed(1);
    set_total(newTotal);
  };

  const prevent = (evt) => {
    if (evt.key === "e") {
      evt.preventDefault();
    }
  };

  return (
    <section>
      <div className="weight__title">
        <span>1RM CALCULATOR</span>
      </div>
      <div class="input-group">
        <span class="input-group-text">Reps:</span>
        <input
          className="form-control"
          name="reps"
          step="1"
          min="0"
          max="1000"
          type="number"
          onKeyDown={prevent}
          value={values.reps}
          onChange={value_handler}
          placeholder="0"
          pattern="[0-9]+"
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">Weight:</span>
        <input
          className="form-control"
          name="weight"
          type="number"
          onChange={value_handler}
          placeholder="0"
          step="1"
          min="0"
          max="200"
          value={values.weight}
          onKeyDown={prevent}
          pattern="[0-9]+"
        />
      </div>

      <h2>{total}</h2>
    </section>
  );
}

export default Rm;
