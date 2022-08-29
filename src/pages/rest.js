import React from "react";
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
  return (
    <div className="rest__container">
      <div className="rest__components">
        <div className="global__title">REST</div>
        <div>
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
          <div style={{ marginTop: "10px" }}>
            {props.isPaused ? (
              <PlayButton onClick={props.playButton} />
            ) : (
              <PauseButton onClick={props.pauseButton} />
            )}
            <ResetButton
              onClick={props.resetButton}
              disabled={props.isPausedRef === "false"}
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

          <label className="settings__label">
            seconds:{" "}
            <span className="rest__timerSettings">
              {parseInt(localStorage.getItem("SettingsInfoWorkSeconds"))}
            </span>
          </label>
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
        </div>
      </div>
    </div>
  );
}

export default Rest;
