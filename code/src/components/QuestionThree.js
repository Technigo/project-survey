import React from 'react';

import Alert from './Alert';

const humidityArray = ['60%', '90%', 'Eh.. what?!'];

const QuestionThree = ({
  humidity,
  onHumidityChange,
  alert,
  onStepChange,
  onEnter,
}) => {
  return (
    <form>
      What is you indoor humidity?
      {humidityArray.map((value) => (
        <label key={value}>
          <input
            type='radio'
            value={value}
            onChange={onHumidityChange}
            checked={humidity === value}
            onKeyPress={onEnter}
          />
          {value}
        </label>
      ))}
      {alert && <Alert />}
      <button type='button' className='form-button' onClick={onStepChange}>
        Next
      </button>
    </form>
  );
};

export default QuestionThree;
