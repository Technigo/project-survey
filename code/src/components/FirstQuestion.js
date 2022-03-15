import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  //  const { nameInput, onNameInputChange } = props;

  return (
    <section>
      <h1>This survey is unnecessary</h1>
      <h2>
        There will be 6 random questions with one quick break in the middle
      </h2>
      <h3>Let's get stated by writing your name: </h3>
      <form>
        <label htmlFor="nameInput">Type your name here </label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        />
        <button onClick={onStepChange}> Next question</button>
      </form>
    </section>
  );
};

export default FirstQuestion;
