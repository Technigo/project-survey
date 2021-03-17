import React from "react";
import "./Summary.css";

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Your answers:</h2>
      <div>
        Your own words about the future: <q>{props.userInput}</q> /Genius
      </div>
      <div>
        And you believe that in 50 years {props.populationAge}% of all humans
        will live to be over 150 years old! Compare that with your estimation
        that it will take {props.yearsToMars} for us humans to settle on Mars.
      </div>
      <div>
        The thing you most look forward to experience though, is {props.futureExpectations}!
      </div>
    </div>
  );
};
