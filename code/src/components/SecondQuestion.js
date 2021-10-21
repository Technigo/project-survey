import React from "react";

const SecondQuestion = ({
  surnameInput,
  onSurnameInputChange,
  onStepChange,
}) => {
  return (
    <>
      <p>Boring i know but....will also need last name</p>
      <form>
        <label className="input" htmlFor="surnameInput"></label>
        <input
          className="input"
          id="surnameInput"
          type="text"
          value={surnameInput}
          onChange={onSurnameInputChange}
        />
        <button className="btn" onClick={onStepChange}>
          Next question
          <span role="img" aria-label="pumpkin">
            🎃
          </span>
        </button>
      </form>
    </>
  );
};

export default SecondQuestion;
