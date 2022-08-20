import React, { useState, useEffect } from "react";
import "../CSS/set.css";

function Set() {
  const [counter, setCounter] = useState(0);

   useEffect(() => {
     setCounter(JSON.parse(window.localStorage.getItem("counter")));
   }, []);

   useEffect(() => {
     window.localStorage.setItem("counter", counter);
   }, [counter]);

  const add = () => {
    setCounter(counter + 1);
  };

  const less = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };

  return (
    <section>
      <div className="set__title">
        <span>SET</span>
      </div>
      <div className="set_counter">{counter}</div>
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
