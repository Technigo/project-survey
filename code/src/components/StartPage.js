import React from "react";

const StartPage = ({ onStepChange }) => {
  return (
    <>
      <h1 className="description">survey</h1>
      <h2 className="page-header">Hello first page</h2>
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
