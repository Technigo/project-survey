import React from "react";
import "./Summary.css";

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Your answers:</h2>
      <div>Your own words about the future: <q>{props.userInput}</q> /Genius</div>
      <div>
        And you believe it will take us {props.years} to get to live on Mars.
      </div>
      <div>
        In the future you hoping most to experience {props.futureExpectations}!
      </div>
    </div>
  );
};
