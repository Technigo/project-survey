import React from "react";

const SecondQuestion = ({ animalInput, onAnimalInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        Would rather have 100 duck-sized elephants or 1 elephant-sized duck?
      </h2>
      <label htmlFor="animalInput">Elephant</label>
      <input
        type="radio"
        value="elephant"
        onChange={onAnimalInputChange}
        checked={animalInput === "elephant"}
      />
      <span role="img" aria-label="elephant">
        🐘
      </span>

      <label htmlFor="animalInput">Duck</label>
      <input
        type="radio"
        value="duck"
        onChange={onAnimalInputChange}
        checked={animalInput === "duck"}
      />
      <span role="img" aria-label="elephant">
        🦆
      </span>
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default SecondQuestion;
