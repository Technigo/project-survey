import React from 'react';

const Dream = ({ dream, onDreamChange, onNextChange, onBackChange }) => {
  return (
    <section className='container'>
      <div className='background-transparent'>
        <h2 className='page-title'>What is your dream destination?</h2>
        <div>
          <form>
            <label htmlFor='dream' label='dream'>
              <p>Add it here:</p>

              <input
                id='dream'
                type='text'
                value={dream}
                onChange={onDreamChange}
              />
            </label>
          </form>
          <button className='btn' type='submit' onClick={onBackChange}>
            Back
          </button>
          <button
            className='btn'
            disabled={dream === ''}
            onClick={onNextChange}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dream;
