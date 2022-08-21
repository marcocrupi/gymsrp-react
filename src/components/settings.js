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
        work: {settingsInfo.workMinutes}:00
      </label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      
    </div>
  );
}

export default Settings;
