import React from "react";
import './Button.css'

export const Button = (props) => {

  const buttonText = () => {
    return props.value === false ? "Submit" : "Redo";
  };

  return (
    <button
      onClick={props.onClick}
      data-content={buttonText()}
      value={props.value}
    ></button>
  );
};
