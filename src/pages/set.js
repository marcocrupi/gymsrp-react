import React, { useState } from "react";
import "../CSS/set.css";

function Set() {
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("counter"))
  );

  localStorage.setItem("counter", counter)

  


  const add = () => {
    setCounter(parseInt(localStorage.getItem("counter")) + 1);
  };

  const less = () => {
    setCounter(parseInt(localStorage.getItem("counter")) - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };

  return (
    <div className="set__container">
      <div className="set__components">
        <div className="global__title">
          <span>SET</span>
        </div>
        <div className="set__counter">
          {isNaN(counter)
            ? setCounter(0)
            : parseFloat(localStorage.getItem("counter"))}
        </div>
        <div className="set__buttons">
          <button
            onClick={add}
            className="set__plus btn btn-warning btn-lg shadow-none"
          >
            +
          </button>
          <button
            onClick={() => {
              setCounter(0);
            }}
            className="set__reset btn btn-danger btn-lg shadow-none"
          >
            RESET
          </button>
          <button
            onClick={less}
            className="set__less btn btn-warning btn-lg shadow-none"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Set;
