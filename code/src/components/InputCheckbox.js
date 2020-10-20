import React from 'react';

const InputCheckbox = ({ question, id, checkbox, setCheckbox }) => {
  return (
    <label>
      <h2>{question}</h2>
      <input
        id={id}
        type="checkbox"
        checked={checkbox}
        onChange={event => setCheckbox(event.target.checked)}
      />
    </label>
  );
};

export default InputCheckbox;
