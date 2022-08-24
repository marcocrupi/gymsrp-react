import React, { useState } from "react";
import Timer from "../components/timer";
import Settings from "../components/settings";
import "../CSS/rest.css";
import SettingsContext from "../components/settingscontext";

function Rest() {
  const [showSettings, setShowSettings] = useState(false);
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

  localStorage.setItem("ShowSettings", showSettings);
  
  return (
    <div className="rest__container">
      <div className="rest__components">
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            setWorkMinutes,
            workSeconds,
            setWorkSeconds,
          }}
        >
          <Timer />
          <Settings />
        </SettingsContext.Provider>
      </div>
    </div>
  );
}

export default Rest;
