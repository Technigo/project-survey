import React from "react";

import "./Summary.css";

export const Summary = ({userInput, populationAge, yearsToMars, futureExpectations}) => {

    const estimateMarsLiving = () => {
        if (yearsToMars !== "Never") {
            return <div>Compare that with your estimation
        that it will take {yearsToMars} for us humans to settle on Mars.</div>
        } else {
            return <div>On the other hand, you never think we will get to Mars! :O</div>
        }
    }
  return (
      <>
    <h2 className="summary-heading">Your answers:</h2>
    <div className="summary">
      <div>
        Your own words about the future: <q>{userInput}</q> /Genius
      </div>
      <div>
        And you believe that in 50 years {populationAge}% of all humans
        will live to be over 150 years old!
        {estimateMarsLiving()}
      </div>
      <div>
        The thing you most look forward to experience though, is {futureExpectations}!
      </div>
    </div>
    </>
  );
};
