import React from 'react';

const InputRadiobutton = ({
  classLabel,
  question,
  array,
  value,
  onRadioChange,
  classSpan,
}) => {
  return (
    <>
      <h2>{question}</h2>
      {array.map(radio => (
        <label className={classLabel} htmlFor={radio} key={radio} tabIndex="0">
          <input
            id={radio}
            type="radio"
            value={radio}
            onChange={onRadioChange}
            checked={value === radio}
          />
          <span className={classSpan}> </span>
          {radio}
        </label>
      ))}
    </>
  );
};

export default InputRadiobutton;
