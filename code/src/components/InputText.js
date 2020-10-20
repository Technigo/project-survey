import React from 'react';

const InputText = ({ question, id, text, setText }) => {
  return (
    <label>
      <h2>{question}</h2>
      <input
        type="text"
        id={id}
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Enter something"
      />
    </label>
  );
};

export default InputText;
