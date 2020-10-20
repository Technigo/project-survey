import React from 'react';

const InputRadiobutton = ({ question, array, radiobutton, setRadiobutton }) => {
  return (
    <>
      <h2>{question}</h2>
      {array.map(radio => (
        <label key={radio}>
          <input
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
