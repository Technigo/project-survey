import React, { useState } from "react";

export const QuestionThree = ({ toSwitch }) => {
  return (
    <div>
      <h1>Were you able to select a suitable product according to your individual taste?</h1>
      <range>
        <label>1</label>
        <label>10</label>
      </range>
      <button onClick={toSwitch}>Continue</button>
    </div>
  );
};
