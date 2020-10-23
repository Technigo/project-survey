import React from 'react';

const InputCheckbox = ({
  classLabel,
  question,
  array,
  selected,
  onCheckboxChange,
  classSpan,
}) => {
  return (
    <>
      {question}
      {array.map(checkbox => (
        <label className={classLabel} htmlFor={checkbox} key={checkbox}>
          <input
            id={checkbox}
            type="checkbox"
            value={checkbox}
            checked={selected.includes(checkbox)}
            onChange={event => onCheckboxChange(event.target.value)}
          />
          <span className={classSpan}></span>
          {checkbox}
        </label>
      ))}
    </>
  );
};

export default InputCheckbox;
