import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/bottomnavbar.css";

function Bottomnavbar() {
  return (
    <div className="bottomnavbar">
      <NavLink
        to="/gymsrp-react"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/gymsrp-react/set"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Set
      </NavLink>
      <NavLink
        to="/gymsrp-react/rest"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Rest
      </NavLink>
      <NavLink
        to="/gymsrp-react/percentage"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Percentage
      </NavLink>
      <NavLink
        to="/gymsrp-react/rm"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        1RM
      </NavLink>
      <NavLink
        to="/gymsrp-react/contact"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Bottomnavbar;
