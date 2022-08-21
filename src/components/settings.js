// npm add react-slider
import ReactSlider from "react-slider";
import "../CSS/slider.css";
import SettingsContext from "./settingscontext";
import { useContext } from "react";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label className="settings__label">
        minutes: {settingsInfo.workMinutes}
      </label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={0}
        max={60}
      />

      <label className="settings__label">
        seconds: {settingsInfo.workSeconds}
      </label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workSeconds}
        onChange={(newValue) => settingsInfo.setWorkSeconds(newValue)}
        min={0}
        max={60}
      />
    </div>
  );
}

export default Settings;
