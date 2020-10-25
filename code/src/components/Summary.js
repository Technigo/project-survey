import React from "react";

//collects all the inputs - ANSWERS - and presents them
const Summary = ({ questionAnswer1, questionAnswer2, questionAnswer3, isBoxChecked }) => {
  return (
    <div className="summary">
      <h1 tabIndex="0">Summary of your moving requirements:</h1>
      <p>Thank you for your price inquiry, {questionAnswer1}! You want price for {isBoxChecked}.
      You're moving to a new place which is {questionAnswer2} away.
      You said {questionAnswer3} to our cleaning service.
      </p>
    </div>
  );
};

export default Summary;