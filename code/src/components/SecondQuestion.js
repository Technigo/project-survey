import React from "react";

const SecondQuestion = ({ animalInput, onAnimalInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        Would you rather have 100 duck-sized elephants OR 1 elephant-sized duck?
      </h2>
      <section className="radio-container">
        <div className="radio-select">
          <label>
            <div className="radio-choice">
              <input
                type="radio"
                value="elephant"
                onChange={onAnimalInputChange}
                checked={animalInput === "elephant"}
              />
              <span role="img" aria-label="elephants">
                🐘🐘🐘
              </span>
            </div>
          </label>
        </div>

        <div className="radio-select">
          <label>
            <div className="radio-choice-duck">
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
          </label>
        </div>
      </section>
      <button disabled={animalInput === ""} onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default SecondQuestion;
