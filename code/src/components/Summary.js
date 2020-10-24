import React from "react";

export const Summary = ({ name, checked, value }) => {
  return (
    <div className="form-summary">
      <div>
        <h1>
          Chezzes, {name}!<p>You actually say {checked} to cheese!</p>
          <p>And you do buy cheese {value} Interesting!</p>
          <p>Thank you for aswering the chessy questions, have a great day!</p>
        </h1>
      </div>
    </div>
  );
};
