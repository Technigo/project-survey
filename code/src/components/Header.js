import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-continer">
      <div class="logosbox">
        <img
          className="technigo-logo"
          src="pictures/technigo-logo.png"
          alt="technigo"
        />
        <h2 className="meets">meets..</h2>
        <img
          className="bravo-logo"
          src="pictures/bravoLogo2.jpeg"
          alt="bravo"
        />
      </div>
      <p className="intro-text">
        Imagine there was a reality show about programmers. Who would you be?
      </p>
    </header>
  );
};

export default Header;
