import React from "react";

const SecondQuestion = ({
  secretnameInput,
  onSecretnameInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <label htmlFor="secretnameInput">
        Type your secret name (I won´t tell) :
      </label>
      <input
        id="secretnameInput"
        type="text"
        value={secretnameInput}
        onChange={onSecretnameInputChange}
      />
      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default SecondQuestion;
