import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  console.log(nameInput);
  return (
    <form id="firstPage" className="form">
      <h2 className="page-header">Your name please</h2>
      <label className="label" htmlFor="nameInput">
        <p>Type your name here</p>
      </label>
      <input
        className="input"
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <a
        href="#secondQuestion"
        className="button-container"
        onClick={onStepChange}
      >
        <img className="button-icon" src="./img/chevron.png" alt=""></img>
      </a>
    </form>
  );
};

export default FirstQuestion;
