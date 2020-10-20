import React from 'react';

const InputCheckbox = ({ question, checkbox, setCheckbox }) => {
  return (
    <label htmlFor="InputCheckbox">
      <h2>{question}</h2>
      <input
        name="InputCheckbox"
        type="checkbox"
        checked={checkbox}
        onChange={event => setCheckbox(event.target.checked)}
      />
    </label>
  );
};

export default InputCheckbox;
