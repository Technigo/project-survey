import React from 'react';

const InputCheckbox = ({ className, question, checkbox, setCheckbox }) => {
  return (
    <label className={className} htmlFor="InputCheckbox">
      {question}
      <input
        id="InputCheckbox"
        type="checkbox"
        checked={checkbox}
        onChange={event => setCheckbox(event.target.checked)}
      />
    </label>
  );
};

export default InputCheckbox;
