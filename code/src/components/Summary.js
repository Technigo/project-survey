import React from "react";

//collects all the inputs - ANSWERS! and presents them
const Summary = ({ questionAnswer1, questionAnswer2, questionAnswer3 }) => {
  return (
    <div className="summary">
      <p>Summary: Okay, so you live in {questionAnswer1} and you're moving {questionAnswer2} away.
  Your answer with needing help with cleaning was: {questionAnswer3}</p>
    </div>
  );


};


export default Summary;