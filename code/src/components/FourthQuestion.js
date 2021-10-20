import React from "react";

const FourthQuestion = ({ gameInput, onGameInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        Would you rather be trapped inside a video game or have that video game
        come to life in the real world?
      </h2>
      <label htmlFor="gameInput">Inside</label>
      <input
        type="radio"
        value="inside"
        onChange={onGameInputChange}
        checked={gameInput === "inside"}
      />

      <label htmlFor="gameInput">Outside</label>
      <input
        type="radio"
        value="outside"
        onChange={onGameInputChange}
        checked={gameInput === "outside"}
      />
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default FourthQuestion;
