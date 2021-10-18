import React from 'react';

const QuestionTwo = ({ destination, onDestinationChange, onStepChange }) => {
  // const { nameInput, onNameInputChange } = props;
  //Then you also have to send props as argument.

  return (
    <form>
      <select onChange={onDestinationChange} value={destination}>
        <option value=''>Where do you want to go?</option>
        <option value='sarek'>Sarek</option>
        <option value='padjelanta'>Padjelanta</option>
        <option value='kungsleden'>Kungsleden</option>
      </select>
      {/* <label htmlFor='surnameInput'>Preferred surname: </label>
      <input
        id='surnameInput'
        type='text'
        value={surnameInput}
        onChange={onSurnameInputChange}
      /> */}
      <button type='submit' onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default QuestionTwo;
