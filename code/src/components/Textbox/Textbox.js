import React from 'react';
import './Textbox.css';
import { ButtonSubmit } from '../Buttons/ButtonSubmit/ButtonSubmit';

export const Textbox = ({ textbox, setTextbox, handleSubmit }) => {
  const handleTextboxChange = (event) => {
    console.log(event.target.value);
    setTextbox(event.target.value);
  };

  return (
    <label htmlFor="textbox">
        Would you like to add anything else?
      <input
        type="text"
        id="textbox"
        name="textbox"
        onChange={handleTextboxChange}
        value={textbox}
        placeholder="Enter text here..." />
      <ButtonSubmit onSubmit={handleSubmit} />
    </label>
  );
};
