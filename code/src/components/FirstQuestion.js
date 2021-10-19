import React from "react";

const FirstQuestion = (props) => {
    const { name, onNameInputChange, onStepChange} = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label htmlFor="inputName">What is your name?</label>
      <input
        type="text"
        id="inputName"
        value={name}
        onChange={onNameInputChange}
        // onChange={(e) => onNameInputChange(e)}
        // onChange={(e) => setNameInput(e.target.value)}
      />
      <button onClick={onStepChange}>next question</button>
    </form>
  );
};
export default FirstQuestion;
