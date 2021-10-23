import React from 'react';

const DateQuestion = ({ dateInput, onDateInputChange, onStepChange }) => {
  return (
    <form className='short-text-form'>
      <label htmlFor='dateInput'>When is the event taking place?</label>
      <input
        id='dateInput'
        type='datetime-local'
        value={dateInput}
        onChange={onDateInputChange}
      />
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default DateQuestion;
