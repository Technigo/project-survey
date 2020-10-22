import React from 'react';

const InputRadiobutton = ({
  className,
  question,
  array,
  value,
  setRadiobutton,
}) => {
  return (
    <>
      <h2>{question}</h2>
      {array.map(radio => (
        <label className={className} htmlFor={radio} key={radio} tabIndex="0">
          <input
            id={radio}
            type="radio"
            value={radio}
            onChange={event => setRadiobutton(event.target.value)}
            checked={value === radio}
          />
          {radio}
        </label>
      ))}
    </>
  );
};

export default InputRadiobutton;
