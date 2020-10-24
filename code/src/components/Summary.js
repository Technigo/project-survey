import React from "react";

//collects all the inputs - ANSWERS - and presents them
const Summary = ({ questionAnswer1, questionAnswer2, questionAnswer3 }) => {
  return (
    <div className="summary">
      <h1>Summary of your moving requirements:</h1>
      <p>Okay, so you live in {questionAnswer1} and you're moving {questionAnswer2} away.
      Your answer with needing help with cleaning was: {questionAnswer3}</p>
    </div>
  );

};

export default Summary;