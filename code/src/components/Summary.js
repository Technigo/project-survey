import React from "react";

const Summary = ({ nameInput, interestInput, ageInput, onStepChange }) => {
  return (
    <>
      <h2 className="page-header">Summary</h2>
      <p>Welcome {nameInput} to the community of Foaje.</p>
      <p>We are happy to hear you want to be a {interestInput} at our place.</p>
      <p>Your age is between: {ageInput} </p>
      <p className="last-message">Enjoy!</p>
    </>
  );
};

export default Summary;
