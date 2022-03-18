import React from 'react';

const whyGroup = ['why1', 'why2', 'why3'];

const QuestionWhy = ({ why, onWhyChange, onNextChange }) => {
  return (
    <section className='container'>
      <form>
        <h2 className='page-title'>Why do you want to move there?</h2>
        {whyGroup.map((group) => (
          <div className='align-radio' key={group}>
            <label>
              <input
                id='why'
                type='radio'
                value={group}
                onChange={onWhyChange}
                checked={why === group}
              />
              {group}
            </label>
          </div>
        ))}
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default QuestionWhy;