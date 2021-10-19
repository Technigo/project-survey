import React from "react";

const SecondQuestion = ({surname, onSurnameInputChange, onStepChange}) => {
    return (
        <>
        <form>
        <label htmlFor="inputSurname">What is your surname?</label>
        <input
          type="text"
          id="inputSurname"
          value={surname}
          onChange={onSurnameInputChange}
        />
      </form>
      <button onClick={onStepChange}>Second question</button>
      </>
    );
  };
  export default SecondQuestion;