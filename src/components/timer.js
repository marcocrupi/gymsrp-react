import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./playbutton";
import PauseButton from "./pausebutton";

const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? red : green,
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={ {marginTop:'20px'} }>
        <PlayButton />
        <PauseButton />
      </div>
    </div>
  );
}

export default Timer;
