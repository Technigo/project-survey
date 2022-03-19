import React from 'react';

const whyGroup = ['It has nice surroundings', 'It has good communications', 'It feels safe', 'It gives you a good vibe']

const QuestionWhy = ({ why, onWhyChange, onNextChange }) => {
  return (
      <form className="form-box">
        <label htmlFor='why' label='why' className='question-text'>Why? </label>
        {whyGroup.map((group) => (
            <label key={group}>
              <input
                id='why'
                type='radio'
                name='radiobuttons'
                value={group}
                onChange={(event) => onWhyChange(event.target.value)}
                defaultChecked={why === group}
              />
              {group}
            </label>
        ))}
        <button onClick={onNextChange}>Next question</button>
      </form>
  );
};

export default QuestionWhy;