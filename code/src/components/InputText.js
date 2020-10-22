import React from 'react';
import './InputText.scss';

const InputText = ({ classLabel, classInput, question, value, setText }) => {
  return (
    <label className={classLabel} htmlFor="InputText">
      {question}
      <input
        className={classInput}
        type="text"
        id="InputText"
        value={value}
        onChange={event => setText(event.target.value)}
        placeholder="Enter something"
      />
    </label>
  );
};

export default InputText;
