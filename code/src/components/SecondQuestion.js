import React from "react";

const SecondQuestion = ({
  secretnameInput,
  onSecretnameInputChange,
  onStepChange,
}) => {
  return (
    <div className="question-container">
      <form>
        <label htmlFor="secretnameInput">
          <h2>Type your secret name (I won´t tell) :</h2>
        </label>
        <input
          id="secretnameInput"
          type="text"
          value={secretnameInput}
          onChange={onSecretnameInputChange}
        />
        <button onClick={onStepChange}>Next question</button>
      </form>
    </div>
  );
};

export default SecondQuestion;
