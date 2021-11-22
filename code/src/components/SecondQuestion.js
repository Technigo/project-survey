import React from "react";

const emotionalArray = ["Happy and joyful", "Worried/Anxious", "Energetic"];

export const SecondQuestion = ({
  emotionalInput,
  onEmotionalInputChange,
  nextQuestion,
  previousQuestion,
  step,
}) => {
  return (
    <main className="main-container">
      <button
        className="back-btn"
        aria-label="Go back"
        onClick={previousQuestion}
      >
        <span class="fas fa-arrow-left"></span>
      </button>
      <form className="form-container">
        <p className="question-number">Question {step}</p>
        <h2 className="question-heading">EMOTIONAL LIFE</h2>
        {emotionalArray.map((emotional) => (
          <div className="question-container">
            <label className="radio-input" key={emotional} htmlFor={emotional}>
              {/* prettier-ignore */}
              <input
            		className="radio-button"
								id={emotional}
            		type="radio"
            		value={emotional}
            		onChange={onEmotionalInputChange}
            		checked={emotional === emotionalInput}
          		/>
              {emotional}
            </label>
          </div>
        ))}
      </form>
      <button
        className="next-btn"
        disabled={emotionalInput === ""}
        onClick={nextQuestion}
      >
        Next
      </button>
    </main>
  );
};
