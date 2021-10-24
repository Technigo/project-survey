import React from "react";
const ThirdQuestion = ({ candyInput, onCandyInputChange, onStepChange }) => {
  return (
    <div className="thirdQ">
      <h2 className="trick">
        Trick or treat!
        <span role="img" aria-label="ghost">
          👻
        </span>
      </h2>
      <img className="candy" alt="candy-svg" src="./icons/candy.svg"></img>
      <p>Select your favourite Halloween candy</p>
      <form className="form-third">
        <select
          className="select-third"
          value={candyInput}
          onChange={onCandyInputChange}
        >
          <option value="">Select...</option>
          <option value="chocolade eyes">Chocolad eyes</option>
          <option value="jelly brain">Jelly brain</option>
          <option value="crunchy fingers">Crunchy fingers</option>
        </select>
        <button className="btn" onClick={onStepChange}>
          NEXT QUESTION
        </button>
      </form>
    </div>
  );
};
export default ThirdQuestion;
