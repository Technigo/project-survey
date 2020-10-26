import React from "react";

import "./form.css";

const Summary = ({ isBoxChecked, textAnswer, dropdownAnswer, radioAnswer }) => {
  return (
    <div className="summary">
      <h1 tabIndex="0">Summary of your moving requirements:</h1>
      <p>Thank you for your interest, {textAnswer}! You want price for {isBoxChecked}.
      You're moving to a new place which is {dropdownAnswer} away.
      You said {radioAnswer} to renting cardboard boxes.
      A price estimation will be sent to you shortly.
      </p>
    </div>
  );
};

export default Summary;