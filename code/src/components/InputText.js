import React from 'react';

const InputText = ({ text, setText }) => {
  return (
    <label>
      <h2>What's your name?</h2>
      <input
        type="text"
        // id={id}
        onChange={event => setText(event.target.value)}
        value={text}
      />
    </label>
  );
};

export default InputText;
