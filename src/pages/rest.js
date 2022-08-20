import React, { useState } from "react";
import Timer from "../components/timer";
import Settings from "../components/setting";
import "../CSS/rest.css"

function Rest() {

   const [showSettings, setShowSettings] = useState(false);
   const [workMinutes, setWorkMinutes] = useState(45);
   const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="rest__container">
      <div className="rest__components">
        <Settings />
        <Timer />
      </div>
    </div>
  );
}

export default Rest;
