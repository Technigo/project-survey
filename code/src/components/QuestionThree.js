import React from 'react';

const fruits = ['apple', 'melon', 'lemon'];

const QuestionThree = ({ fruit, onFruitChange, onStepChange, onEnter }) => {
  return (
    <form>
      Favourite fruit:
      {fruits.map((frukt) => (
        <label key={frukt}>
          <input
            type='radio'
            value={frukt}
            onChange={onFruitChange}
            checked={fruit === frukt}
            onKeyPress={onEnter}
          />
          {frukt}
        </label>
      ))}
      <button type='button' className='form-button' onClick={onStepChange}>
        Submit
      </button>
    </form>
  );
};

export default QuestionThree;
