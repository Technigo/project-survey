import React from "react";

import "./form.css";

const Summary = ({ isBoxChecked, textAnswer, dropdownAnswer, radioAnswer }) => {
  return (
    <div className="section-container">
      <h1 tabIndex="0">Summary of your moving requirements:</h1>
      <p>Thank you for your interest, {textAnswer}!</p>
      <p> &#9745; You want price for {isBoxChecked}.</p>
      <p>&#9745; You're moving to a new place which is {dropdownAnswer} away.</p>
      <p>&#9745; You said {radioAnswer} to renting cardboard boxes.</p>
      <p>A price estimation will be sent to you shortly.</p>
    </div>
  );
};

export default Summary;