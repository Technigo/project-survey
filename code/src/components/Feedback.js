import React from 'react';

export const Feedback = ({ feedback, setFeedback }) => {
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="feedback" className="feedback-label">
      <p>Please give some feedback to your closest manager:</p>
      <textarea
        id="feedback"
        value={feedback}
        onChange={handleFeedbackChange}
        className="input-field-feedback"
        placeholder="I would like to say..."
        rows={4}
        cols={20} />
    </label>
  );
}