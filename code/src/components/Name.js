import React from 'react';

const Name = ({ name, onInputChange, onNextChange, onBackChange }) => {
  return (
    <section className='container'>
      <div className='background-transparent'>
        <h2 className='page-title'>What should I call you?</h2>
        <div>
          <form>
            <label htmlFor='name' label='name'>
              <p>Type your name here:</p>

              <input
                id='name'
                type='text'
                value={name}
                onChange={onInputChange}
              />
            </label>
          </form>
          <button className='btn' type='submit' onClick={onBackChange}>
            Back
          </button>
          <button
            className='btn'
            type='submit'
            disabled={name === ''}
            onClick={onNextChange}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Name;
