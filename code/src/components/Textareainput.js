
import React from 'react';

export const TextAreaInput = ({ textArea, setTextArea }) => {
  const handleTextAreaInput = (event) => {
    setTextArea(event.target.value)
  }
  return (
    <div>
      <p>Lately I`ve noticed that you:</p>
      <textarea className="text-input top-margin" rows="3" name="Message" type="text" value={textArea} onChange={handleTextAreaInput} placeHolder="Write a message" required />
    </div>
  );
}