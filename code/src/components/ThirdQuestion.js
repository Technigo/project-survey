import React from "react";

const ThirdQuestion = ({ astleyInput, onAstleyInputChange, onStepChange }) => {
  return (
    <form>
      <h2>Rick Astley is never gonna:</h2>
      <select onChange={onAstleyInputChange} value={astleyInput}>
        <option value="">Select:</option>
        <option value="give-you-up">give you up</option>
        <option value="let-you-down">let you down</option>
        <option value="make.you-cry">make you cry</option>
        <option value="hurt-you">hurt you</option>
        <option value="all-above">all of the above</option>
      </select>
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default ThirdQuestion;
