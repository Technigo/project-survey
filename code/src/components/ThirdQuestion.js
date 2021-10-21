import React from "react";
const ThirdQuestion = ({ candyInput, onCandyInputChange, onStepChange }) => {
  console.log(candyInput);
  return (
    <>
      <h2>
        Trick or treat!<span>👻</span>
      </h2>
      <img className="svg-image" src="./icons/candy.svg"></img>
      <p>Select your favourite Halloween candy</p>
      <form>
        <select
          className="select"
          value={candyInput}
          onChange={onCandyInputChange}
        >
          <option value="">Select...</option>
          <option value="chocolade eyes">Chocolad eyes</option>
          <option value="jelly brain">Jelly brain</option>
          <option value="crunchy fingers">Crunchy fingers</option>
        </select>
        <button className="btn" onClick={onStepChange}>
          Next question
          <span role="img" aria-label="pumpkin">
            🎃
          </span>
        </button>
      </form>
    </>
  );
};
export default ThirdQuestion;
