import React from "react";
import "../CSS/bottomnav.css";
import {
  NavLink,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

function Bottomnav({ to, ...props }) {
  //   const list = document.querySelectorAll(".bottomnav__list");
  //   function activeLink() {
  //     list.forEach((item) => item.classList.remove("active"));
  //     this.classList.add("active");
  //   }
  //   list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <div className="bottomnav__container">
      <div className="bottomnav__navigation">
        <ul>
          <CustomLink to="/gymsrp-react" className="bottomnav__link">
            <span className="bottomnav__icon">
              <ion-icon name="hourglass-outline"></ion-icon>
            </span>
            <span className="bottomnav__text">Timer</span>
          </CustomLink>

          <CustomLink to="/gymsrp-react/percentage" className="bottomnav__link">
            <span className="bottomnav__icon">
              <ion-icon name="calculator-outline"></ion-icon>
            </span>
            <span className="bottomnav__text">Percentage</span>
          </CustomLink>

          <CustomLink to="/gymsrp-react/rm" className="bottomnav__link">
            <span className="bottomnav__icon">
              <ion-icon name="barbell-outline"></ion-icon>
            </span>
            <span className="bottomnav__text">1RM</span>
          </CustomLink>

          <CustomLink to="/gymsrp-react/bmi" className="bottomnav__link">
            <span className="bottomnav__icon">
              <ion-icon name="accessibility-outline"></ion-icon>
            </span>
            <span className="bottomnav__text">BMI</span>
          </CustomLink>

          <CustomLink to="/gymsrp-react/contact" className="bottomnav__link">
            <span className="bottomnav__icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className="bottomnav__text">Contact</span>
          </CustomLink>

          <div className="bottomnav__indicator"></div>
        </ul>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "bottomnav__list active" : "bottomnav__list"}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}

export default Bottomnav;
