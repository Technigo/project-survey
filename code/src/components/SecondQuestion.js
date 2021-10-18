import React from "react";

const SecondQuestion = ({
  interestInput,
  onInterestInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <h2>second question</h2>
      <label htmlFor="interstInput">What is your interest?</label>
      <input
        id="interestInput"
        type="text"
        value={interestInput}
        onChange={onInterestInputChange}
      />
      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default SecondQuestion;
