import React from "react";
const ThirdQuestion = ({ candyInput, onCandyInputChange, onStepChange }) => {
  console.log(candyInput);
  return (
    <>
      <h2>Select your favourite Halloween candy</h2>
      <form>
        <select value={candyInput} onChange={onCandyInputChange}>
          <option value="">Select...</option>
          <option value="chocolade eyes">Chocolad eyes😱</option>
          <option value="jelly brain">Jelly brain</option>
          <option value="hard candy">Hard candy</option>
        </select>
        <button onClick={onStepChange}>Next question</button>
      </form>
    </>
  );
};
export default ThirdQuestion;
