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
            photography (2015-2022), SEO and digital marketing. I worked 6 years
            as a Global Brand Ambassador for Panasonic, I collaborated with
            numerous other companies in the photographic sector, such as: Epson,
            Nokia, Carl Zeiss, Samsung, Crumpler, Energizer and Manfrotto.
          </p>
        </div>
        <div>
          <a href="mailto:marcocrupi@hotmail.it">
            <button className="contact__email btn btn-warning btn-lg shadow-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
