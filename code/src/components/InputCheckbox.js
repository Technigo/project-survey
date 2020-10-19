import React from 'react';

const InputCheckbox = ({ checkbox, setCheckbox }) => {
  return (
    <label>
      <h2>Checkbox:</h2>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={event => setCheckbox(event.target.checked)}
      />
    </label>
  );
};

export default InputCheckbox;
