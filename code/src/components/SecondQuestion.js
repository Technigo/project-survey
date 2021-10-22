import React from "react";

const SecondQuestion = ({
  onPlanetInputChange,
  onStepChange,
  planetInput,
  prevent,
}) => {
  const planetsInput = ["Mercuru", "Venus", "Mars", "Jupiter"];
  return (
    <form className="planet-form" onSubmit={prevent}>
      <h2>What planet are you from?</h2>
      {planetsInput.map((planet) => (
        <label key={planet} htmlFor="planet">
          <input
            id="planet"
            name="planet"
            type="radio"
            value={planet}
            onChange={onPlanetInputChange}
            checked={planetInput === planet}
          ></input>
          {planet}
        </label>
      ))}
      <input
        className="button"
        type="submit"
        disabled={!planetInput}
        onClick={onStepChange}
      />
    </form>
  );
};
export default SecondQuestion;
