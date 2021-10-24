import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <div className="firstQ">
      <form>
        <h2 className="first-h2">
          Looking forward to finding out your Halloween personality{" "}
        </h2>
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
            NEXT QUESTION
            {/* <span role="img" aria-label="pumpkin">
              🎃
            </span> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstQuestion;
