import React from 'react';

export const Overall = ({ overall, setOverall, step, handleStepIncrease }) => {
  const handleNextClick = (event) => {
    if (!overall) {
      alert('Please fill out the required field.');
      return;
    }

    handleStepIncrease(event);
  };

  const handleOverallChange = (event) => {
    setOverall(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNextClick();
  };

  return (
    <div className="overall-container">
      <h2>Question {step}</h2>
      <p>What is your overall perception of us?</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={overall}
          onChange={handleOverallChange}
          required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};
