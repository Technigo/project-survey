import React from 'react';

const InputText = ({ feedback, onFeedbackChange, rating }) => {
  return (
    <section className="textarea">
      <h2 tabIndex="0 ">Would you mind telling us why you answered '{rating}'?</h2>
      <textarea className="text-input" value={feedback} onChange={onFeedbackChange} rows="3" />
    </section>
  )
}

export default InputText;