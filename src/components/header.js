import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/header.css";

const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");

function Header() {
  const activeMenu = () => {
    toggle.classList.toggle("active");
    navbar.classList.toggle("active");
  };

  return (
    <>
      <div onClick={activeMenu} id="toggle"></div>
      <div id="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#review">Review</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
            <NavLink to="/gymsrp-react/contact" className="header__link">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
