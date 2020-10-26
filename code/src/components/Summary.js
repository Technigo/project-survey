import React from "react";

const Summary = ({ isBoxChecked, textAnswer, dropdownAnswer, radioAnswer }) => {
  return (
    <div className="summary">
      <h1 tabIndex="0">Summary of your moving requirements:</h1>
      <p>Thank you for your price inquiry, {textAnswer}! You want price for {isBoxChecked}.
      You're moving to a new place which is {dropdownAnswer} away.
      You said {radioAnswer} to our cleaning service.
      We will send you a price estimation shortly.
      </p>
    </div>
  );
};

export default Summary;