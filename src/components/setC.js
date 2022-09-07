import React, { useState } from "react";
import "../CSS/set.css";

function SetComponent() {
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("counter"))
  );

  localStorage.setItem("counter", counter);

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
        {/* <div className="set__title">
        <span>SET</span>
      </div> */}

        <ion-icon size="large" name="add-outline" onClick={add}></ion-icon>

        <div className="set__counter">
          {isNaN(counter)
            ? setCounter(0)
            : counter === 0
            ? "SET"
            : parseFloat(localStorage.getItem("counter"))}
        </div>

        <ion-icon size="large" name="remove-outline" onClick={less}></ion-icon>
      </div>
      <div
        className="set__reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        <ion-icon color="danger" name="trash-outline"></ion-icon>
      </div>
    </div>
  );
}

export default SetComponent;
