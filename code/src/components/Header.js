import React from "react";
import "styles/header.css";
import SignUpButton from './SignUpButton';


export const Header = ({onSignUp}) => {
  return (
    <header className="header">
      <img
        src="../img/hero-image.jpg"
        className="hero-img"
        alt="Ingredients and utensils for baking on a pastel background"
      />
      <h1 className="hero-text"> Want to take a baking course? </h1>

      <SignUpButton
      onSignUp={onSignUp}
      />

    </header>
  );
};

export default Header;