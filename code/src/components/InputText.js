import React from 'react';

const InputText = ({ classInput, question, value, onTextChange }) => {
  return (
    <label htmlFor="InputText">
      {question}
      <input
        className={classInput}
        type="text"
        id="InputText"
        value={value}
        onChange={onTextChange}
        placeholder="Enter something"
        onKeyPress={event => {
          event.key === 'Enter' && event.preventDefault();
        }}
      />
    </label>
  );
};

export default InputText;
