import React from "react";
import "./button.css";

const Button = ({
  buttonText = "Click",
  handleClick,
  buttonType = "button",
}) => {
  return (
    <button type={buttonType} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
