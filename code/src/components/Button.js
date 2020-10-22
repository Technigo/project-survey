import React from "react";

const Button = ({
  buttonText = "Click",
  handleClick,
  buttonType = "button",
}) => {
  return (
    <div>
      <button type={buttonType} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
