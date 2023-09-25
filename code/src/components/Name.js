import React from 'react';
import './name.css'

export const Name = ({ name, setName, step, setStep }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const goToNextQuestion = () => {
    setStep(step + 1);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      goToNextQuestion();
    }
  }

  return (
    <div className="name-container">
      <h1 className="survey-title">Sneaker Survey</h1>
      <h2>Hi there!</h2>
      <p>Would you like to be part of shaping a new site
        for second hand limited Sneakers?
      </p>
      <h3>If yes, fill in this survey!</h3>
      <p>Please start with entering your name:</p>
      <form>
        <input
          aria-label="name-input"
          className="input-text"
          type="text"
          value={name}
          placeholder="Type it here..."
          onKeyDown={handleKeyDown}
          onChange={handleNameChange} />
      </form>
    </div>
  );
};