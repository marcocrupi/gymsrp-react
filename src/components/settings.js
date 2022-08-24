// npm add react-slider
import ReactSlider from "react-slider";
import "../CSS/slider.css";
import SettingsContext from "./settingscontext";
import { useContext } from "react";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  localStorage.setItem("SettingsInfoWorkMinutes", settingsInfo.workMinutes);
  localStorage.setItem("SettingsInfoWorkSeconds", settingsInfo.workSeconds);

  return (
    <div style={{ textAlign: "left" }}>
      <label className="settings__label">
        minutes: {parseInt(localStorage.getItem("SettingsInfoWorkMinutes"))}
      </label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={parseInt(localStorage.getItem("SettingsInfoWorkMinutes"))}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={0}
        max={60}
      />

      <label className="settings__label">
        seconds: {parseInt(localStorage.getItem("SettingsInfoWorkSeconds"))}
      </label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={parseInt(localStorage.getItem("SettingsInfoWorkSeconds"))}
        onChange={(newValue) => settingsInfo.setWorkSeconds(newValue)}
        min={0}
        max={60}
      />
    </div>
  );
}

export default Settings;
