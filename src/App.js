import React from "react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedlayout";
import Set from "./pages/set";
import Rest from "./pages/rest";
import Percentage from "./pages/percentage";
import Rm from "./pages/rm";
import Contact from "./pages/contact";

function App() {
  const [workMinutes, setWorkMinutes] = useState(
    isNaN(parseInt(localStorage.getItem("SettingsInfoWorkMinutes")))
      ? 0
      : parseInt(localStorage.getItem("SettingsInfoWorkMinutes"))
  );
  const [workSeconds, setWorkSeconds] = useState(
    isNaN(parseInt(localStorage.getItem("SettingsInfoWorkSeconds")))
      ? 0
      : parseInt(localStorage.getItem("SettingsInfoWorkSeconds"))
  );

  localStorage.setItem("SettingsInfoWorkMinutes", workMinutes);
  localStorage.setItem("SettingsInfoWorkSeconds", workSeconds);

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

  const resetB = document.getElementById("resetB");
  const playB = document.getElementById("playB");



  // CONSOLE LOG - START

  // console.log("isPaused", isPaused);
  // console.log("secondsLeft", secondsLeftRef.current);
  // console.log("secondsLeftRef", secondsLeftRef);
  // console.log("isPausedRef", isPausedRef);

  // CONSOLE LOG - END

  // LOCAL STORAGE SET ITEM - START

  localStorage.setItem("isPausedRef", isPausedRef.current);
  localStorage.setItem("secondsLeftRef", secondsLeftRef.current);

  // LOCAL STORAGE SET ITEM - END

  function tick() {
    console.log("tick", isPausedRef.current);
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
    console.log("secondsLeft", secondsLeftRef.current);
  }

     

  useEffect(() => {
    function resetMode() {
      setWorkMinutes(0);
      setWorkSeconds(0);
      setSecondsLeft(0);
      isPausedRef.current = true;
      setIsPaused(true);
      playB.classList.remove("play__button");
    }

    secondsLeftRef.current = workMinutes * 60 + workSeconds;

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
        }
      }
      if (secondsLeftRef.current === 0) {
        return resetMode();
      }
      if (localStorage.getItem("isPausedRef") === "false") {
        playB.classList.add("play__button");
        tick();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [workMinutes, workSeconds, playB]);

  const totalSeconds = workMinutes * 60 + workSeconds;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  // LOCAL STORAGE - START

  localStorage.setItem("totalSeconds", totalSeconds);

  // LOCAL STORAGE - END

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
    setWorkMinutes(0);
    setWorkSeconds(0);
    setSecondsLeft(0);
    isPausedRef.current = true;
    secondsLeftRef.current = 0;
    setIsPaused(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gymsrp-react" element={<SharedLayout />}>
          <Route
            index
            element={
              <Rest
                secondsLeftRef={secondsLeftRef.current}
                percentage={percentage}
                minutes={minutes}
                seconds={seconds}
                playButton={playButton}
                pauseButton={pauseButton}
                resetButton={resetButton}
                setWorkMinutes={setWorkMinutes}
                setWorkSeconds={setWorkSeconds}
                isPausedRef={localStorage.getItem("isPausedRef")}
              />
            }
          />
          <Route path="/gymsrp-react/set" element={<Set />} />
          <Route path="/gymsrp-react/percentage" element={<Percentage />} />
          <Route path="/gymsrp-react/rm" element={<Rm />} />
          <Route path="/gymsrp-react/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
