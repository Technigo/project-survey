import React from "react";
import "./button.css";

const Button = ({
  buttonText = "Click",
  handleClick,
  buttonType = "button",
  singleButton,
}) => {
  return (
    <button
      className={singleButton ? "single-btn btn" : "btn"}
      type={buttonType}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
