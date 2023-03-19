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
      <img src="/images/fashion.jpg" alt="fashion clothing" className="fashion-image" />
      <div className="right-container">
        <div className="overall-header">
          <h2>Question {step}</h2>
          <p>What&apos;s your overall perception of us?</p>
        </div>
        <div className="overall-form">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={overall}
              onChange={handleOverallChange}
              required />
            <button type="submit">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};
