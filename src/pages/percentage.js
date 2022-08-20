import React, { useState, useEffect } from "react";
import "../CSS/percentage.css";
import { createBrowserHistory } from "history";
import qs from "qs";

function Percentage() {
  const [values, setValues] = useState({
    percentage: "",
    of: "",
  });



   const history = createBrowserHistory();

   useEffect(() => {
     const filterParams = history.location.search.substr(1);
     const filtersFromParams = qs.parse(filterParams);
     if (filtersFromParams.values) {
       setValues(Number(filtersFromParams.values));
     }
   }, []);

   useEffect(() => {
     history.push(`?count=${values}`);
   }, [values]);



  const value_handler = (e) => {
    let name = e.target.name;
    let value = +e.target.value;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    calc_total(newValues);
  };

  const [total, set_total] = useState(0);

  const calc_total = (newValues) => {
    const { percentage, of } = newValues;

    if (percentage > 200) {
      const newValuesIf = {
        ...values,
        percentage: 200,
      };
      console.log(newValuesIf);
      setValues(newValuesIf);
      return calc_total(newValuesIf);
    } else if (of > 1000) {
      const newValuesElse = {
        ...values,
        of: 1000,
      };
      console.log(newValuesElse);
      setValues(newValuesElse);
      return calc_total(newValuesElse);
    }

    let result1 = percentage * of;
    let result2 = result1 / 100;
    const newTotal = result2.toFixed(2);
    set_total(newTotal);
  };

  return (
    <section>
      <div className="percentage__title">
        <span>PERCENTAGE CALCULATOR</span>
      </div>
      <div className="percentage__inputs">
        <input
          name="percentage"
          value={values.percentage}
          type="number"
          onChange={value_handler}
          placeholder="%"
          step="0.1"
          min="0"
          max="200"
          pattern="[0-9]+"
        />
        <input
          name="of"
          value={values.of}
          step="0.1"
          min="0"
          max="1000"
          type="number"
          onChange={value_handler}
          placeholder="of"
          pattern="[0-9]+"
        />
      </div>
      <h2>{total}</h2>
    </section>
  );
}

export default Percentage;
