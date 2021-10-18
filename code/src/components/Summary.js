import React from "react";

const Summary = ({ nameInput, interestInput, ageInput, onStepChange }) => {
  return (
    <div>
      <h2>Summary</h2>
      <p>Your name is: {nameInput}</p>
      <p>You want to be: {interestInput} </p>
      <p>Your age is between: {ageInput} </p>
      <button onClick={onStepChange}>Submit</button>
    </div>
  );
};

export default Summary;
