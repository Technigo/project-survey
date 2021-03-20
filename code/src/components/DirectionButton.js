import React from "react";

import "./DirectionButton.css";

export const DirectionButton = ({ onButtonClick, i, direction }) => {
  const buttonTxt = [
    "Let's go!",
    "Next",
    "Next",
    "Next",
    "Next",
    "Submit",
    "Redo",
  ];

  const setButtonText = () => {
    if (direction === "forward") {
      return buttonTxt[i];
    } else {
      return "Back";
    }
  };

  //the content on the button will change depending on the progression in the form
  return (
    <button
      className="direction-button"
      value={direction}
      onClick={onButtonClick}
      data-content={setButtonText()}
    ></button>
  );
};
