import React from 'react';

const InputText = ({ feedback, onFeedbackChange, rating }) => {
  return (
    <section className="textarea">
      <label htmlFor="feedback">
        <h2>Would you mind telling us why you answered '{rating}'   ?</h2>
      </label>
      <textarea className="text-input" value={feedback} onChange={onFeedbackChange} id="feedback" rows="3" />
    </section>
  )
}

export default InputText;