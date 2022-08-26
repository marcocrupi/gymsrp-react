import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/header.css";

function Header() {

  const toggle = document.getElementById("toggle");
  const navbar = document.getElementById("navbar");

  document.onclick = function (e) {
    if (e.target.id !== "toggle" && e.target.id !== "navbar") {
      toggle.classList.remove("active");
      navbar.classList.remove("active");
    }
  }; 

  const activeMenu = () => {
    toggle.classList.toggle("active");
    navbar.classList.toggle("active");
  };

  return (
    <>
      <div id="navbar">
        <ul>
          <li>
            <NavLink to="/gymsrp-react" className="header__link">
              Rest
            </NavLink>
          </li>
          <li>
            <NavLink to="/gymsrp-react/set" className="header__link">
              Set
            </NavLink>
          </li>
          <li>
            <NavLink to="/gymsrp-react/percentage" className="header__link">
              Percentage
            </NavLink>
          </li>
          <li>
            <NavLink to="/gymsrp-react/rm" className="header__link">
              1RM
            </NavLink>
          </li>
          <li>
            <NavLink to="/gymsrp-react/bmi" className="header__link">
              BMI
            </NavLink>
          </li>
          <li>
            <NavLink to="/gymsrp-react/contact" className="header__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <nav>
        <div className="header__navbar">
          <div className="header__logo">
            <span>Gym SRP1B</span>
          </div>
          <div className="header__links">
            <NavLink to="/gymsrp-react" className="header__link">
              Rest
            </NavLink>
            <NavLink to="/gymsrp-react/set" className="header__link">
              Set
            </NavLink>
            <NavLink to="/gymsrp-react/percentage" className="header__link">
              Percentage
            </NavLink>
            <NavLink to="/gymsrp-react/rm" className="header__link">
              1RM
            </NavLink>
            <NavLink to="/gymsrp-react/bmi" className="header__link">
              BMI
            </NavLink>
            <NavLink to="/gymsrp-react/contact" className="header__link">
              Contact
            </NavLink>
          </div>
          <div onClick={activeMenu} id="toggle"></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
