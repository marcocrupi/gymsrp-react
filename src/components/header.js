import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/set"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Set
      </NavLink>
      <NavLink
        to="/rest"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Rest
      </NavLink>
      <NavLink
        to="/percentage"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Percentage
      </NavLink>
      <NavLink
        to="/rm"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        1RM
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Header;
