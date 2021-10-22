import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">Brought to you by: Lisa Pousette Blomé</p>
      <div className="icon-container">
        <div class="circles">
          <a
            href="https://github.com/annaester"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./pictures/image10.png" alt="github" />
          </a>
        </div>
        <div class="circles">
          <a
            href="https://www.linkedin.com/in/lisa-pousette-blome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./pictures/image13.svg" alt="linkdin" />
          </a>
        </div>
        <div class="circles">
          <a
            href="https://stackoverflow.com/users/16658613/annaester"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              src="./pictures/image8.png"
              alt="stackoverflow"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
