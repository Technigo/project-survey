import React from 'react';

import Alert from './Alert';

const plantsArray = ['🌱', '🌲', '🌻'];

const QuestionFour = ({
  favouritePlant,
  onFavouritePlantChange,
  alert,
  onStepChange,
  onEnter,
}) => {
  return (
    <form>
      What is you indoor humidity?
      {plantsArray.map((plant) => (
        <label key={plant}>
          <input
            type='radio'
            value={plant}
            onChange={onFavouritePlantChange}
            checked={favouritePlant === plant}
            onKeyPress={onEnter}
          />
          {plant}
        </label>
      ))}
      {alert && <Alert />}
      {/* return (
    <form>
      <h2>Favourite plants</h2>
      <label>
        🌱
        <input
          type='checkbox'
          id='stickling'
          checked={favouritePlant}
          onChange={onFavouritePlantChange}
          onKeyPress={onEnter}
        />
      </label>
      <label>
        🌲
        <input
          type='checkbox'
          id='gran'
          checked={gran}
          onChange={onFavouritePlantChange}
          onKeyPress={onEnter}
        />
      </label>
      <label>
        🌻
        <input
          type='checkbox'
          id='solros'
          checked={solros}
          onChange={onFavouritePlantChange}
          onKeyPress={onEnter}
        />
      </label> */}
      <button className='form-button' type='button' onClick={onStepChange}>
        Submit
      </button>
    </form>
  );
};

export default QuestionFour;
