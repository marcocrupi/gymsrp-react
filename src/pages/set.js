import React, { useState, useEffect } from "react";
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
    <section>
      <div className="set__title">
        <span>SET</span>
      </div>
      <div className="set_counter">
        {isNaN(counter) ? setCounter(0) : parseFloat(localStorage.getItem("counter"))}
      </div>
      <div className="set_buttons">
        <button onClick={add} className="set__plus">
          +
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
          className="set__reset"
        >
          RESET
        </button>
        <button onClick={less} className="set__less">
          -
        </button>
      </div>
    </section>
  );
}

export default Set;
