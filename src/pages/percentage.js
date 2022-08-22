import React, { useState } from "react";
import "../CSS/percentage.css";

function Percentage() {
  const [percentvalues, setPercentvalues] = useState({
    percentage: `${parseFloat(localStorage.getItem("Percentage"))}`,
    of: `${parseFloat(localStorage.getItem("Of"))}`,
  });

  const value_handler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newValues = {
      ...percentvalues,
      [name]: value,
    };
    setPercentvalues(newValues);
    calc_total(newValues);
  };

  const [total, set_total] = useState(
    parseFloat(localStorage.getItem("Total"))
  );

  const calc_total = (newValues) => {
    const { percentage, of } = newValues;

    if (percentage > 200) {
      const newValuesIf = {
        ...percentvalues,
        percentage: 200,
      };
      console.log(newValuesIf);
      setPercentvalues(newValuesIf);
      return calc_total(newValuesIf);
    } else if (of > 1000) {
      const newValuesElse = {
        ...percentvalues,
        of: 1000,
      };
      console.log(newValuesElse);
      setPercentvalues(newValuesElse);
      return calc_total(newValuesElse);
    }

    let op1 = percentage * of;
    let op2 = op1 / 100;
    const newTotal = op2.toFixed(2);
    set_total(newTotal);
  };

  const prevent = (evt) => {
    if (evt.key === "e") {
      evt.preventDefault();
    }
  };

  localStorage.setItem("Percentage", percentvalues.percentage);
  localStorage.setItem("Of", percentvalues.of);
  localStorage.setItem("Total", total);

  return (
    <section>
      <div className="percentage__title">
        <span>PERCENTAGE CALCULATOR</span>
      </div>
      <div className="input-group">
        <span className="input-group-text">Percentage:</span>
        <input
          className="form-control"
          name="percentage"
          type="number"
          onChange={value_handler}
          placeholder="0"
          step="1"
          min="0"
          max="200"
          value={parseFloat(localStorage.getItem("Percentage"))}
          onKeyDown={prevent}
          pattern="[0-9]+"
        />
        <span className="input-group-text">%</span>
      </div>
      <div className="input-group">
        <span className="input-group-text">Of:</span>
        <input
          className="form-control"
          name="of"
          step="1"
          min="0"
          max="1000"
          type="number"
          onKeyDown={prevent}
          value={parseFloat(localStorage.getItem("Of"))}
          onChange={value_handler}
          placeholder="0"
          pattern="[0-9]+"
        />
      </div>
      <h2>{isNaN(total) ? 0 : parseFloat(localStorage.getItem("Total"))}</h2>
    </section>
  );
}

export default Percentage;