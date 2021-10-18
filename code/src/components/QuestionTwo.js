import React, { useState } from "react";

export const QuestionTwo = ({ toQuestionThree }) => {
  return (
    <div>
      <h1>Evaluate product design</h1>
      <radio>
        <label>1</label>
        <label>2</label>
        <label>3</label>
        <label>4</label>
      </radio>
      <button onClick={toQuestionThree}>Continue</button>
    </div>
  );
};
