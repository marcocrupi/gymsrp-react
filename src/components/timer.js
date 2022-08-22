import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./playbutton";
import PauseButton from "./pausebutton";
import SettingsContext from "./settingscontext";

const red = "#f54e4e";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);

  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  function tick() {
    console.log("tick", isPausedRef.current);
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function resetMode() {
      settingsInfo.setWorkMinutes(0);
      settingsInfo.setWorkSeconds(0);
      setSecondsLeft(0);
      isPausedRef.current = true;
      setIsPaused(true);
    }

    secondsLeftRef.current =
      settingsInfo.workMinutes * 60 + settingsInfo.workSeconds;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        console.log("stop", isPausedRef.current);
        if (secondsLeftRef.current === 0) {
          console.log("clear interval");
          clearInterval(interval);
          return;
        }
         return;
      }
      if (secondsLeftRef.current === 0) {
        return resetMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = settingsInfo.workMinutes * 60 + settingsInfo.workSeconds;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  function pauseButton() {
    setIsPaused(true);
    isPausedRef.current = true;
    console.log("pause button");
  }

  function playButton() {
    setIsPaused(false);
    isPausedRef.current = false;
    console.log("play button");
  }

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton onClick={playButton} />

        <PauseButton onClick={pauseButton} />
      </div>
    </div>
  );
}

export default Timer;
