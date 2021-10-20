import React from "react";

const SixtQuestion = ({ outfitInput, onOutfitInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        If it meant you could save pizza from extinction, would you eat a
        cricket?
      </h2>
      <label htmlFor="outfitInput">Pyjamas</label>
      <input
        type="radio"
        value="pyjamas"
        onChange={onOutfitInputChange}
        checked={outfitInput === "pyjamas"}
      />

      <label htmlFor="outfitInput">Suit</label>
      <input
        type="radio"
        value="suit"
        onChange={onOutfitInputChange}
        checked={outfitInput === "suit"}
      />
      <button onClick={onStepChange}>See Overview</button>
    </form>
  );
};

export default SixtQuestion;
