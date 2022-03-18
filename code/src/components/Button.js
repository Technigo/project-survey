import React from "react";
import "./Button.css";

const Button = ({ label, inputValue }) => {
  return (
    <button type="submit" className="button" disabled={inputValue === ""}>
      {label}
    </button>
  );
};

export default Button;
