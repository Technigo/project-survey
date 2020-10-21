import React from 'react';

const InputRadiobutton = ({
  className,
  question,
  array,
  radiobutton,
  setRadiobutton,
}) => {
  return (
    <>
      <h2>{question}</h2>
      {array.map(radio => (
        <label className={className} htmlFor="InputRadiobuttons" key={radio}>
          <input
            id="InputRadiobuttons"
            type="radio"
            value={radio}
            onChange={event => setRadiobutton(event.target.value)}
            checked={radiobutton === radio}
          />
          {radio}
        </label>
      ))}
    </>
  );
};

export default InputRadiobutton;
