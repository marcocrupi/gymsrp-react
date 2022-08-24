import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./playbutton";
import PauseButton from "./pausebutton";
import SettingsContext from "./settingscontext";
import ResetButton from "./resetbutton";

const red = "#f54e4e";

// LOCAL STORAGE VARIABLES - ENDS

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(
    localStorage.getItem("isPausedRef") === null
      ? true
      : localStorage.getItem("isPausedRef")
  );

  const [secondsLeft, setSecondsLeft] = useState(
    isNaN(parseInt(localStorage.getItem("secondsLeftRef")))
      ? 0
      : parseInt(localStorage.getItem("secondsLeftRef"))
  );

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  // CONSOLE LOG - START

  console.log("isPaused", isPaused);
  console.log("secondsLeft", secondsLeft);
  console.log("secondsLeftRef", secondsLeftRef);
  console.log("isPausedRef", isPausedRef);

  // CONSOLE LOG - END

  // LOCAL STORAGE SET ITEM - START

  localStorage.setItem("isPausedRef", isPausedRef.current);
  localStorage.setItem("secondsLeftRef", secondsLeftRef.current);

  // LOCAL STORAGE SET ITEM - END

  function tick() {
    console.log("tick", isPausedRef.current);
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
    // isNaN(secondLeftStorage) ? secondsLeftRef.current-- : secondLeftStorage;
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

    setSecondsLeft(
      localStorage.getItem("isPausedRef") === "false"
        ? (secondsLeftRef.current = parseInt(
            localStorage.getItem("secondsLeftRef")
          ))
        : secondsLeftRef.current
    );

    const interval = setInterval(() => {
      if (localStorage.getItem("isPausedRef") === "true") {
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
      if (localStorage.getItem("isPausedRef") === "false") {
        tick();
      }
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

  function resetButton() {
    settingsInfo.setWorkMinutes(0);
    settingsInfo.setWorkSeconds(0);
    setSecondsLeft(0);
    isPausedRef.current = true;
    secondsLeftRef.current = 0;
    setIsPaused(true);
  }

  return (
    <div>
      <CircularProgressbar
        value={secondsLeftRef.current === 0 ? 0 : percentage}
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
        <ResetButton onClick={resetButton} />
      </div>
    </div>
  );
}

export default Timer;
