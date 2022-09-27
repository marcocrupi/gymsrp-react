import React from "react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedlayout";
import swal from "sweetalert";
import Rest from "./pages/rest";
import Percentage from "./pages/percentage";
import Rm from "./pages/rm";
import Contact from "./pages/contact";
import Bmi from "./pages/bmi";

import Beep from "./sounds/compress-audio-alarm.mp3";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [audio] = useState(new Audio(Beep));
  audio.autoplay = true;
  audio.loop = true;

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

  // LOCAL STORAGE SET ITEM - START

  localStorage.setItem("SettingsInfoWorkMinutes", workMinutes);
  localStorage.setItem("SettingsInfoWorkSeconds", workSeconds);
  localStorage.setItem("isPaused", isPaused);
  localStorage.setItem("isPausedRef", isPausedRef.current);
  localStorage.setItem("secondsLeftRef", secondsLeftRef.current);

  // LOCAL STORAGE SET ITEM - END

  // SET COUNTER - START

  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("counter"))
  );

  const [autoSet, setAutoSet] = useState(false);

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

  // SET COUNTER - END

  // COUNTDOWN - START

  useEffect(() => {
    function resetMode() {
      setWorkMinutes(0);
      setWorkSeconds(0);
      setSecondsLeft(0);
      isPausedRef.current = true;
      setIsPaused(true);

      if (
        secondsLeftRef.current === 0 &&
        localStorage.getItem("isPausedRef") === "false"
      ) {
        audio.play();
        swal("Time out!", "", "success", {
          buttons: {
            ok: "Ok",
          },
        }).then((value) => {
          switch (value) {
            case "Ok":
              audio.pause();
              break;
            default:
              audio.pause();
          }
        });
      }
      if (
        secondsLeftRef.current === 0 &&
        localStorage.getItem("isPausedRef") === "false" &&
        autoSet === false
      ) {
        add();
      }
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
        // console.log("stop", isPausedRef.current);
        if (secondsLeftRef.current === 0) {
          // console.log("clear interval");
          clearInterval(interval);
        }
      }
      if (secondsLeftRef.current === 0) {
        return resetMode();
      }
      if (localStorage.getItem("isPausedRef") === "false") {
        // console.log("countdown");
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
        if (secondsLeftRef.current === 0) {
          return resetMode();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [workMinutes, workSeconds, audio, autoSet]);

  // COUNTDOWN - END

  // VARIABLES AND CALCULATIONS FOR THE TIMER DISPLAYED ON THE SCREEN - START
  // Look at the "CircularProgressbar" on the rest.js page

  const totalSeconds = workMinutes * 60 + workSeconds;
  localStorage.setItem("totalSeconds", totalSeconds);
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  // VARIABLES AND CALCULATIONS FOR THE TIMER DISPLAYED ON THE SCREEN - END

  // TIMER CONTROLS - START

  function pauseButton() {
    setIsPaused(true);
    isPausedRef.current = true;
    // console.log("pause button");
  }

  function playButton() {
    setIsPaused(false);
    isPausedRef.current = false;
    // console.log("play button");
  }

  function resetButton() {
    setWorkMinutes(0);
    setWorkSeconds(0);
    setSecondsLeft(0);
    isPausedRef.current = true;
    secondsLeftRef.current = 0;
    setIsPaused(true);
  }

  // TIMER CONTROLS - END

  // FUNCTION FOR PRESET TIMER - START

  function plusMinutes() {
    setWorkMinutes(workMinutes + 1);
    if (workMinutes >= 60) {
      setWorkMinutes(60);
    }
  }
  function lessMinutes() {
    setWorkMinutes(workMinutes - 1);
    if (workMinutes <= 0) {
      setWorkMinutes(0);
    }
  }

  function plusSeconds() {
    setWorkSeconds(workSeconds + 1);
    if (workSeconds >= 60) {
      setWorkSeconds(60);
    }
  }
  function lessSeconds() {
    setWorkSeconds(workSeconds - 1);
    if (workSeconds <= 0) {
      setWorkSeconds(0);
    }
  }

  function button30S() {
    setWorkSeconds(30);

    setWorkMinutes(0);
  }

  function button1M() {
    setWorkMinutes(1);

    setWorkSeconds(0);
  }

  function button1M30S() {
    setWorkMinutes(1);
    setWorkSeconds(30);
  }

  function button2M() {
    setWorkMinutes(2);
    setWorkSeconds(0);
  }

  function button2M30S() {
    setWorkMinutes(2);
    setWorkSeconds(30);
  }

  function button3M() {
    setWorkMinutes(3);
    setWorkSeconds(0);
  }

  function button3M30S() {
    setWorkMinutes(3);
    setWorkSeconds(30);
  }

  function button4M() {
    setWorkMinutes(4);
    setWorkSeconds(0);
  }

  function button4M30S() {
    setWorkMinutes(4);
    setWorkSeconds(30);
  }

  function button5M() {
    setWorkMinutes(5);
    setWorkSeconds(0);
  }

  // FUNCTION FOR PRESET TIMER - START

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gymsrp-react" element={<SharedLayout />}>
          <Route
            index
            element={
              <Rest
                secondsLeftRef={secondsLeftRef.current}
                setSecondsLeft={setSecondsLeft}
                percentage={percentage}
                minutes={minutes}
                seconds={seconds}
                playButton={playButton}
                pauseButton={pauseButton}
                resetButton={resetButton}
                workMinutes={workMinutes}
                workSeconds={workSeconds}
                setWorkMinutes={setWorkMinutes}
                setWorkSeconds={setWorkSeconds}
                lessMinutes={lessMinutes}
                plusMinutes={plusMinutes}
                plusSeconds={plusSeconds}
                lessSeconds={lessSeconds}
                button30S={button30S}
                button1M={button1M}
                button1M30S={button1M30S}
                button2M={button2M}
                button2M30S={button2M30S}
                button3M={button3M}
                button3M30S={button3M30S}
                button4M={button4M}
                button4M30S={button4M30S}
                button5M={button5M}
                isPaused={isPaused}
                counter={counter}
                setCounter={setCounter}
                add={add}
                less={less}
                autoSet={autoSet}
                audio={audio}
                setAutoSet={setAutoSet}
                isPausedStorage={localStorage.getItem("isPaused")}
                isPausedRef={localStorage.getItem("isPausedRef")}
                isPausedRefCurrent={isPausedRef.current}
                setIsPaused={setIsPaused}
              />
            }
          />
          <Route path="/gymsrp-react/percentage" element={<Percentage />} />
          <Route path="/gymsrp-react/rm" element={<Rm />} />
          <Route path="/gymsrp-react/bmi" element={<Bmi />} />
          <Route path="/gymsrp-react/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
