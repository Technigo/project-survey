import React from "react";
import "styles/header.css";
import SignUpButton from './SignUpButton';


export const Header = ({onSignUp}) => {
  return (
    <header className="header">
      <img
        src="../img/hero-image.jpeg"
        className="hero-img"
        alt="Ingredients and utensils for baking on a pastel background"
      />
      <h1 className="hero-heading">Eat cake for breakfast?</h1>
      <h2 className="hero-subheading">Join me for a morning baking course today!</h2>

      <SignUpButton
      onSignUp={onSignUp}
      />

    </header>
  );
};

export default Header;