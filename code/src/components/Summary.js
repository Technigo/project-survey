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
        <p>
          Compare that with your estimation that it will take {yearsToMars} for
          us humans to settle on Mars.
        </p>
      );
    } else {
      return (
        <p>On the other hand, you never think we will get to Mars! :O</p>
      );
    }
  };

  /* function to write out several choices in checkboxes. It removes the last comma after
    the words and replaces the comma before the last word in teh array to an & sign */
  const futureChoices = () => {
    let moreFutureChoicesArray = moreFutureChoices.split("");
    let last = moreFutureChoicesArray.lastIndexOf(",");

    moreFutureChoicesArray[last] = "";
    last = moreFutureChoicesArray.lastIndexOf(",");
    moreFutureChoicesArray[last] = " &";

    return moreFutureChoicesArray;
  };

  return (
    <>
      <h2 className="summary-heading">Your answers:</h2>
      <div className="summary">
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
          {futureChoice} beacuse of the {futureChoices()}!
        </p>
      </div>
    </>
  );
};
