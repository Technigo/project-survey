import React from "react";
import "./Button.css";

const Button = ({ label }) => {
  return (
    <button type="submit" className="button">
      {label}
    </button>
  );
};

export default Button;
