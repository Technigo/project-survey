import React from "react";
import "styles/header.css";

export const Header = () => {
  return (
      <header className="header">
        <img src="../img/hero.jpg"
        className="hero-img"
        alt="Green leaf in a glass vase with water"
      />
        <h1 className="hero-text"> What's your favorite plant? </h1>
        <button className="start-button">
          <a href="#form">Start survey</a>
        </button>
      </header>
  );
};

export default  Header;
