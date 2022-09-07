import React, { useState,useEffect } from "react";
import "../CSS/set.css";

function SetComponent(props) {
  return (
    <div className="set__container">
      <div className="set__components">
        {/* <div className="set__title">
        <span>SET</span>
      </div> */}

        <ion-icon
          size="large"
          name="add-outline"
          onClick={props.add}
        ></ion-icon>

        <div className="set__counter">
          {isNaN(props.counter)
            ? props.setCounter(0)
            : props.counter === 0
            ? "SET"
            : parseFloat(localStorage.getItem("counter"))}
        </div>

        <ion-icon
          size="large"
          name="remove-outline"
          onClick={props.less}
        ></ion-icon>
      </div>
      <div
        className="set__reset"
        onClick={() => {
          props.setCounter(0);
        }}
      >
        <ion-icon color="danger" name="trash-outline"></ion-icon>
      </div>
    </div>
  );
}

export default SetComponent;
