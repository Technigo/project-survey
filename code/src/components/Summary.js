import React from "react";

import "./Summary.css";

export const Summary = (props) => {
  const {
    userInput,
    populationAge,
    yearsToMars,
    futureChoice,
    moreFutureChoices,
  } = props;

  //returns a different answer depending on if the user choose the option "never" or not
  const estimateMarsLiving = () => {
    if (yearsToMars !== "Never") {
      return (
        <div>
          Compare that with your estimation that it will take {yearsToMars} for
          us humans to settle on Mars.
        </div>
      );
    } else {
      return (
        <div>On the other hand, you never think we will get to Mars! :O</div>
      );
    }
  };

  return (
    <>
     <div className="summary" aria-labelledby="summary">
      <h2 className="summary-heading" id="summary">Your answers:</h2>
        <p>
          Your own words about the future: <q>{userInput}</q> /Genius
        </p>
        <p>
          And you believe that in 50 years {populationAge}% of all humans will
          live to be over 150 years old!
          {estimateMarsLiving()}
        </p>
        <p>
          The thing you most look forward to experience though, is{" "}
          {futureChoice} beacuse of the{" "}
          {moreFutureChoices.map((choice) => (
            <span className="summary-future-choice">{choice}</span>
          ))}
          !
        </p>
      </div>
    </>
  );
};
