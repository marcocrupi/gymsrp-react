import React from "react";
import "../CSS/bottomnav.css";
import { NavLink } from "react-router-dom";

function Bottomnav() {
  const list = document.querySelectorAll(".bottomnav__list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <div className="bottomnav__container">
      <div className="bottomnav__navigation">
        <ul>
          <li className="bottomnav__list active">
            <NavLink to="/gymsrp-react" className="bottomnav__link">
              <span className="bottomnav__icon">
                <ion-icon name="hourglass-outline"></ion-icon>
              </span>
              <span className="bottomnav__text">Timer</span>
            </NavLink>
          </li>
          <li className="bottomnav__list">
            <NavLink to="/gymsrp-react/set" className="bottomnav__link">
              <span className="bottomnav__icon">
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
              <span className="bottomnav__text">Set</span>
            </NavLink>
          </li>
          <li className="bottomnav__list">
            <NavLink to="/gymsrp-react/percentage" className="bottomnav__link">
              <span className="bottomnav__icon">
                <ion-icon name="calculator-outline"></ion-icon>
              </span>
              <span className="bottomnav__text">Percentage</span>
            </NavLink>
          </li>
          <li className="bottomnav__list">
            <NavLink to="/gymsrp-react/rm" className="bottomnav__link">
              <span className="bottomnav__icon">
                <ion-icon name="barbell-outline"></ion-icon>
              </span>
              <span className="bottomnav__text">1RM</span>
            </NavLink>
          </li>
          <li className="bottomnav__list">
            <NavLink to="/gymsrp-react/bmi" className="bottomnav__link">
              <span className="bottomnav__icon">
                <ion-icon name="accessibility-outline"></ion-icon>
              </span>
              <span className="bottomnav__text">BMI</span>
            </NavLink>
          </li>
          <li className="bottomnav__list">
            <NavLink to="/gymsrp-react/contact" className="bottomnav__link">
              <span className="bottomnav__icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <span className="bottomnav__text">Contact</span>
            </NavLink>
          </li>
          <div className="bottomnav__indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default Bottomnav;
