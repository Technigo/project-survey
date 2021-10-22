import React from "react";

const SecondQuestion = ({ animalInput, onAnimalInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        Would you rather have 100 duck-sized elephants OR 1 elephant-sized duck?
      </h2>
      <section className="radio-container">
        <div className="radio-select">
          <label htmlFor="animalInput">elephants</label>
          <div className="radio-choice">
            <input
              type="radio"
              value="elephant"
              onChange={onAnimalInputChange}
              checked={animalInput === "elephant"}
            />
            <span role="img" aria-label="elephant">
              🐘
            </span>
          </div>
        </div>

        <div className="radio-select">
          <label htmlFor="animalInput">duck</label>
          <div className="radio-choice">
            <input
              type="radio"
              value="duck"
              onChange={onAnimalInputChange}
              checked={animalInput === "duck"}
            />
            <span role="img" aria-label="duck">
              🦆
            </span>
          </div>
        </div>
      </section>
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default SecondQuestion;
