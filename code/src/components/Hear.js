import React from 'react';

export const Hear = ({ hear, setHear, step, handleStepIncrease }) => {
  const handleNextClick = (event) => {
    if (!hear) {
      alert('Please select an option.');
      return;
    }

    handleStepIncrease(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNextClick(event);
  }

  return (
    <div className="hear-container">
      <img src="/images/fashion.jpg" alt="fashion clothing" className="fashion-image" />
      <div className="hear-header">
        <h2>Question {step}</h2>
        <p>How did you hear about us?</p>
        <form className="form" onSubmit={handleSubmit}>
          <select
            onChange={(event) => setHear(event.target.value)}
            value={hear}>
            <option value="" disabled>Select:</option>
            <option value="Through a friend">Through a friend</option>
            <option value="Through Social Media">Through Social Media</option>
            <option value="Through Advertising">Through Advertising</option>
            <option value="Other">Other</option>
          </select>
          <div className="next-button">
            <button type="submit" onClick={handleNextClick} required>
            Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}