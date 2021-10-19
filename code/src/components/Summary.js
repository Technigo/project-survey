import React from "react";

const Summary = ({ nameInput, interestInput, ageInput, onStepChange }) => {
  return (
    <section className="summary-container">
      <h2 className="page-header">Summary</h2>
      <p>Your name is: {nameInput}</p>
      <p>You want to be: {interestInput} </p>
      <p>Your age is between: {ageInput} </p>
      <p className="last-message">Welcome to the community of FOAJÉ</p>
    </section>
  );
};

export default Summary;
