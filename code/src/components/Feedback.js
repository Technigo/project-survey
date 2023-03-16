import React from 'react';

export const Feedback = ({ feedback, setFeedback }) => {
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  }
  return (
    <label htmlFor="feedback">
      <p>Please give some feedback to your closest supervisor:</p>
      <input
        id="feedback"
        type="text"
        value={feedback}
        onChange={handleFeedbackChange}
        className="input-field" />
    </label>
  );
}