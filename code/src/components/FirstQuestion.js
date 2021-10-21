import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <container>
      <form>
        <h2>Looking forward to finding out your Halloween personality </h2>
        <p>
          Let's start with your name
          <span role="img" aria-label="pointing-finger">
            👇{" "}
          </span>{" "}
        </p>
        <div className="first">
          <label className="input" htmlFor="nameInput"></label>
          <input
            className="input"
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
          />
          <button className="btn" onClick={onStepChange}>
            Next question
            <span role="img" aria-label="pumpkin">
              🎃
            </span>
          </button>
        </div>
      </form>
    </container>
  );
};

export default FirstQuestion;
