import React from 'react';
import './Textbox.css';

export const Textbox = ({ textbox, setTextbox }) => {
  const handleTextboxChange = (event) => {
    setTextbox(event.target.value);
  }
  return (
    <>
      <p>Would you like to add anything else?</p>
      <input
        type="text"
        onChange={handleTextboxChange}
        value={textbox}
        placeholder="Add message here"
        required />
    </>
  )
};