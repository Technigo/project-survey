import React from "react";

const SecondQuestion = ({
  planetInput,
  onPlanetInputChange,
  onStepChange,
  planetsInput,
  prevent,
}) => {
  return (
    <form onSubmit={prevent}>
      <h2>What planet are you from?</h2>
      {planetsInput.map((planet) => (
        <label key={planet}>
          <input
            type="radio"
            value={planet}
            onChange={onPlanetInputChange}
            checked={planetInput === planet}
          ></input>
          {planet}
        </label>
      ))}
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};
export default SecondQuestion;
