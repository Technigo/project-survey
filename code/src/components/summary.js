import React from "react";

export const Summary = ({ name, checked, value }) => {
  return (
    <div className="form-summary">
      <div>
          <p>Nice, I didn't know {name} was your favorite player!</p>
          <p>And good job that you are watching football {checked} ours a day!</p>
          <p>I agree with you. {value} is the best league in the world.</p>
          <p>Thank you for awnsering the survey and have a wonderful day!</p>
      </div>
    </div>
  );
};