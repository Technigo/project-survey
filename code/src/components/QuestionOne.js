import React, { useState } from "react";

export const QuestionOne = ({ toQuestionTwo }) => {
  return (
    <div>
      <h1>How would you rate our product, based on:</h1>
      <button onClick={toQuestionTwo}>Continue</button>
    </div>
  );
};
