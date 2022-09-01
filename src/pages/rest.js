import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../CSS/rest.css";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "../components/playbutton";
import PauseButton from "../components/pausebutton";
import ResetButton from "../components/resetbutton";
import ReactSlider from "react-slider";
import "../CSS/slider.css";

const firstColor = "#f0c32d";

function Rest(props) {
  const [newButton, setNewButton] = useState(
    JSON.parse(localStorage.getItem("newButton")) || []
  );

  localStorage.setItem("newButton", JSON.stringify(newButton));

  const deleteButton = (index) => {
    const removeList = [...newButton];
    removeList.splice(index, 1);
    setNewButton(removeList);
  };

  const addButton = () => {
    const timerScreen = props.minutes + ":" + props.seconds;
    const realMinutes = props.workMinutes;
    const realSeconds = props.workSeconds;
    let newItems = [
      ...newButton,
      {
        button: timerScreen,
        realminutes: realMinutes,
        realseconds: realSeconds,
      },
    ];

    let uniqueArray = newItems.filter((value, index) => {
      const _value = JSON.stringify(value);
      return (
        index ===
        newItems.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });

    uniqueArray = uniqueArray.filter(function (obj) {
      return obj.button !== "0:00";
    });
    
    setNewButton(uniqueArray);
  };

  const handleClick = (e, index) => {
    let valueMinutes = newButton[index].realminutes;
    let valueSeconds = newButton[index].realseconds;
    props.setWorkMinutes(valueMinutes);
    props.setWorkSeconds(valueSeconds);
  };

  return (
    <div className="rest__container">
      <div className="rest__components">
        <div className="global__title">REST</div>
        <div className="rest__circularandbuttons">
          <div className="rest__circularprogressbar">
            <CircularProgressbar
              value={props.secondsLeftRef === 0 ? 0 : props.percentage}
              text={props.minutes + ":" + props.seconds}
              background
              backgroundPadding={4}
              styles={buildStyles({
                backgroundColor: "#ffffff",
                textColor: "#000000",
                pathColor: firstColor,
                textSize: "25px",
                trailColor: "rgba(27,27,27,.1)",
              })}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            {props.isPausedRef === "true" ? (
              <PlayButton
                onClick={props.playButton}
                disabled={props.secondsLeftRef === 0}
              />
            ) : (
              <PauseButton onClick={props.pauseButton} />
            )}
            <ResetButton
              onClick={props.resetButton}
              style={
                props.isPausedRef === "false"
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            />
          </div>
        </div>
        <div className="container__label">
          <label className="settings__label">
            minutes:{" "}
            <span className="rest__timerSettings">
              {parseInt(localStorage.getItem("SettingsInfoWorkMinutes"))}
            </span>
          </label>
          <div className="sliderBlock">
            <button
              className="supportSlider"
              onClick={props.lessMinutes}
              disabled={props.isPausedRef === "false"}
            ></button>
            <ReactSlider
              className={"slider"}
              thumbClassName={"thumb"}
              trackClassName={"track"}
              value={parseInt(localStorage.getItem("SettingsInfoWorkMinutes"))}
              onChange={(newValue) => props.setWorkMinutes(newValue)}
              min={0}
              max={60}
              disabled={props.isPausedRef === "false"}
            />
            <button
              className="supportSlider plus"
              onClick={props.plusMinutes}
              disabled={props.isPausedRef === "false"}
            ></button>
          </div>
          <label className="settings__label">
            seconds:{" "}
            <span className="rest__timerSettings">
              {parseInt(localStorage.getItem("SettingsInfoWorkSeconds"))}
            </span>
          </label>
          <div className="sliderBlock">
            <button
              className="supportSlider"
              onClick={props.lessSeconds}
              disabled={props.isPausedRef === "false"}
            ></button>
            <ReactSlider
              className={"slider"}
              thumbClassName={"thumb"}
              trackClassName={"track"}
              value={parseInt(localStorage.getItem("SettingsInfoWorkSeconds"))}
              onChange={(newValue) => props.setWorkSeconds(newValue)}
              min={0}
              max={60}
              disabled={props.isPausedRef === "false"}
            />
            <button
              className="supportSlider plus"
              onClick={props.plusSeconds}
              disabled={props.isPausedRef === "false"}
            ></button>
          </div>
        </div>

        <div className="rest__saveTimerButtonBlock">
          {newButton.length - 1 <= 8 && (
            <button
              className="rest__saveTimerButton btn btn-danger btn-lg shadow-none"
              onClick={addButton}
              disabled={props.isPausedRef === "false"}
            >
              <ion-icon name="save-outline"></ion-icon>{" "}
            </button>
          )}
        </div>
        {newButton.length > 0 && (
          <div className="rest__presetTitle">CUSTOM PRESET</div>
        )}

        <div className="rest__preset scrollmenu">
          <div className="rest__blockPresetButton ">
            {newButton.map((singleButton, index) => (
              <div key={index} className="rest__containerCustom">
                <button
                  disabled={props.isPausedRef === "false"}
                  onClick={() => deleteButton(index)}
                  className="rest__deletePreset btn btn-danger btn-lg shadow-none"
                >
                  X
                </button>

                <button
                  className="rest__presetButton btn btn-warning btn-lg shadow-none"
                  value={props.secondsLeftRef}
                  onClick={(e) => handleClick(e, index)}
                  disabled={props.isPausedRef === "false"}
                >
                  <div>{singleButton.button}</div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rest__presetTitle">PRESET</div>

        <div className="rest__preset scrollmenu">
          <div className="rest__blockPresetButton ">
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button30S}
              disabled={props.isPausedRef === "false"}
            >
              00:30
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button1M}
              disabled={props.isPausedRef === "false"}
            >
              01:00
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button1M30S}
              disabled={props.isPausedRef === "false"}
            >
              01:30
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button2M}
              disabled={props.isPausedRef === "false"}
            >
              02:00
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button2M30S}
              disabled={props.isPausedRef === "false"}
            >
              02:30
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button3M}
              disabled={props.isPausedRef === "false"}
            >
              03:00
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button3M30S}
              disabled={props.isPausedRef === "false"}
            >
              03:30
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button4M}
              disabled={props.isPausedRef === "false"}
            >
              04:00
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button4M30S}
              disabled={props.isPausedRef === "false"}
            >
              04:30
            </button>
            <button
              className="rest__presetButton btn btn-warning btn-lg shadow-none"
              onClick={props.button5M}
              disabled={props.isPausedRef === "false"}
            >
              05:00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rest;
