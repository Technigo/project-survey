import React from "react";
import "./StartPage.css";

const StartPage = ({ onStepChange }) => {
  return (
    <>
      <h1 className="description">survey</h1>
      <h2 className="page-header">Hello there and welcome!</h2>
      <a
        aria-label="button to next page"
        href="#firstPage"
        className="button-container"
        onClick={onStepChange}
      >
        <img className="button-icon" src="./img/chevron.png" alt="arrow"></img>
      </a>
    </>
  );
};

export default StartPage;
