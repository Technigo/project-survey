import React from 'react';

const InputText = ({ question, text, setText }) => {
  return (
    <label htmlFor="InputText">
      <h2>{question}</h2>
      <input
        type="text"
        name="InputText"
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Enter something"
      />
    </label>
  );
};

export default InputText;
