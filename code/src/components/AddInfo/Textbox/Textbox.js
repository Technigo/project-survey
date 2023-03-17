import React from 'react';
import './Textbox.css';

export const Textbox = ({ textbox, setTextbox }) => {
  const handleTextboxChange = (event) => {
    console.log(event.target.value);
    setTextbox(event.target.value);
  };

  return (
    <label htmlFor="textbox">
      Add info:
      <input
        type="text"
        id="textbox"
        className="textbox"
        name="textbox-free"
        onChange={handleTextboxChange}
        value={textbox}
        placeholder="Enter text here..."
        required
        aria-describedby="textbox-instructions"
        maxLength={100} />
    </label>
  );
};
