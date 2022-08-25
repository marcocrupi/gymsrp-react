import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/header.css";

function Header() {
  return (
    <nav>
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
    </nav>
  );
}

export default Header;
