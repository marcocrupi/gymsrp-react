import React from "react";
import "../CSS/footer.css";

function Footer() {
  let newDate = new Date();

  return (
    <footer>
      <div className="footer_element">
        Copyright © {newDate.getFullYear()}. All Rights Reserved by Marco Crupi.
      </div>
    </footer>
  );
}

export default Footer;
