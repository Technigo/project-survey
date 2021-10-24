import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form>
      <div className="header-container">
        <h1>kicks and giggles</h1>
      </div>
      <p className="intro-p">adult recess.</p>
      <p className="intro-p-brackets">(yes, we need playtime too)</p>
      <label htmlFor="nameInput">
        <span role="img" aria-label="owl">
          🦉
        </span>{" "}
        whooo's here today?
      </label>
      <input
        id="nameInput"
        type="text"
        placeholder="Type your name"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button disabled={nameInput === ""} onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default FirstQuestion;
