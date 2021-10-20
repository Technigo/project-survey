import React from 'react';

const QuestionTwo = ({
  destination,
  onDestinationChange,
  onStepChange,
  onEnter,
}) => {
  // const { nameInput, onNameInputChange } = props;
  //Then you also have to send props as argument.

  return (
    <form>
      <select
        onChange={onDestinationChange}
        required
        value={destination}
        onKeyPress={onEnter}
      >
        <option value='' disabled>
          Where do you want to go?
        </option>
        <option value='sarek'>Sarek</option>
        <option value='padjelanta'>Padjelanta</option>
        <option value='kungsleden'>Kungsleden</option>
      </select>
      <button className='form-button' type='button' onClick={onStepChange}>
        Next
      </button>
    </form>
  );
};

export default QuestionTwo;
