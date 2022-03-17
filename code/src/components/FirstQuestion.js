import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  //  const { nameInput, onNameInputChange } = props;

  return (
    <section>
      <h1>What kind of code student are you?</h1>
      <h2>Maybe some text here later</h2>
      <h3>Let's get stated by writing your name: </h3>
      <form>
        <label htmlFor="nameInput">First name / nickname </label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        />
        <button onClick={onStepChange}>
          {" "}
          Let's start with the questions!{" "}
        </button>
      </form>
    </section>
  );
};

export default FirstQuestion;
