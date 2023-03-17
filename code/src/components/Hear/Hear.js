import React from 'react';

export const Hear = ({ hear, setHear, step, handleStepIncrease }) => {
  const handleNextClick = (event) => {
    if (!hear) {
      alert('Please select an option.');
      return;
    }

    handleStepIncrease(event);
  };

  return (
    <div className="hear-container">
      <h2>Question {step}</h2>
      <p>How did you hear about us?</p>
      <form className="form">
        <select
          onChange={(event) => setHear(event.target.value)}
          value={hear}>
          <option value="" disabled>Select:</option>
          <option value="Through a friend">Through a friend</option>
          <option value="Through Social Media">Through Social Media</option>
          <option value="Through Advertising">Through Advertising</option>
          <option value="Other">Other</option>
        </select>
        <button type="button" onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
}
