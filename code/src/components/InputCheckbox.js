import React from 'react';

const InputCheckbox = ({
  classLabel,
  question,
  checkbox,
  onCheckboxChange,
  classSpan,
}) => {
  return (
    <label className={classLabel} htmlFor="InputCheckbox">
      {question}
      <input
        id="InputCheckbox"
        type="checkbox"
        checked={checkbox}
        onChange={onCheckboxChange}
      />
      <span className={classSpan}> </span>
    </label>
  );
};

export default InputCheckbox;
