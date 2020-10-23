import React from 'react';

const InputText = ({
  classLabel,
  classInput,
  question,
  value,
  onTextChange,
}) => {
  return (
    <label className={classLabel} htmlFor="InputText">
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
