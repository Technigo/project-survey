import React from "react";
import "./error.css";

const ErrorMessage = ({ errorMessage }) => {
  return <p className="error-message">{errorMessage}</p>;
};

export default ErrorMessage;
