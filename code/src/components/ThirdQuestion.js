import React from "react";

const ThirdQuestion = ({ astleyInput, onAstleyInputChange, onStepChange }) => {
  return (
    <form>
      <h2>Rick Astley is never gonna:</h2>
      <select onChange={onAstleyInputChange} value={astleyInput}>
        <option value="">Select:</option>
        <option value="give-you-up">Give you up</option>
        <option value="let-you-down">Let you down</option>
        <option value="make.you-cry">Make you cry</option>
        <option value="hurt-you">Hurt you</option>
        <option value="all-above">All of the above</option>
      </select>
      <button disabled={astleyInput === ""} onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default ThirdQuestion;
