import React from 'react';

const whyGroup = ['why1', 'why2', 'why3']

const QuestionWhy = ({ why, onWhyChange, onNextChange }) => {
  return (
      <form>
        <h2>Why do you want to move there?</h2>
        {whyGroup.map((group) => (
            <label key={group}>
              <input
                id='why'
                type='radio'
                value={group}
                onChange={onWhyChange}
                checked={why === group}
              />
              {group}
            </label>
        ))}
        <button onClick={onNextChange}>Next question</button>
      </form>
  );
};

export default QuestionWhy;