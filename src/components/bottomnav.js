import React from "react";
import "../CSS/bottomnav.css";

function Bottomnav() {
  return (
    <div>
      <div className="navigation">
        <ul>
          <li className="list">
            <a href="#">
              <span className="icon"></span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon"></span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon"></span>
              <span className="text">Message</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon"></span>
              <span className="text">Photos</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon"></span>
              <span className="text">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottomnav;
