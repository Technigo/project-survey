import React from "react";

const Summary = ({ nameInput, interestInput, ageInput, onStepChange }) => {
  return (
    <section>
      <h2>Summary</h2>
      <p>Your name is: {nameInput}</p>
      <p>You want to be: {interestInput} </p>
      <p>Your age is between: {ageInput} </p>
    </section>
  );
};

export default Summary;
