import React from "react";
import "../CSS/contact.css";
import photoCrupi from "../images/marco_crupi.jpg";

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__components">
        <div className="global__title">ABOUT ME</div>
        <p className="contact__name">MARCO CRUPI</p>
        <p className="contact__role">JUNIOR FRONT-END DEVELOPER</p>
        <div>
          <img
            className="contact__photoMarcoCrupi"
            src={photoCrupi}
            alt="marco_crupi_foto"
          />
        </div>

        <div className="contact__description">
          <p>I was born in Varese in 1988. </p>
          <p>
            Junior Front-End Developer with a background in professional
            photography (2015-2022), SEO and digital marketing.
          </p>
        </div>
        <div className="contact__buttons">
          <div>
            <a href="mailto:marcocrupi@hotmail.it">
              <button className="contact__email btn btn-warning btn-lg shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/crupimarco/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact__email btn btn-primary btn-lg shadow-none">
                <ion-icon name="logo-linkedin"></ion-icon>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
