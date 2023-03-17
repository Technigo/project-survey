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
    <div>
      <h1>Sneaker Survey</h1>
      <h2>Hi there!</h2>
      <p>Please start with entering your name:</p>
      <input
        className="input-text"
        type="text"
        value={name}
        placeholder="Type it here..."
        onKeyDown={handleKeyDown}
        onChange={handleNameChange} />
    </div>
  );
};