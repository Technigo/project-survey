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
        <label
          className={classLabel}
          htmlFor={checkbox}
          key={checkbox}
          tabIndex="0"
        >
          <input
            id={checkbox}
            type="checkbox"
            value={checkbox}
            checked={selected.includes(checkbox)}
            onChange={event => onCheckboxChange(event.target.value)}
          />
          <span
            className={classSpan}
            role="checkbox"
            aria-checked="false"
          ></span>
          {checkbox}
        </label>
      ))}
    </>
  );
};

export default InputCheckbox;
