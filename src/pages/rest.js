import React, { useState } from "react";
import Timer from "../components/timer";
import Settings from "../components/settings";
import "../CSS/rest.css"
import SettingsContext from "../components/settingscontext";

function Rest() {

   const [showSettings, setShowSettings] = useState(false);
   const [workMinutes, setWorkMinutes] = useState(45);
   const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="rest__container">
      <div className="rest__components">
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
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
