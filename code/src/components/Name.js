import React from 'react';

const Name = ({ name, onInputChange, onNextChange }) => {
  return (
    <div>
      <h2>What should I call you?</h2>
      <section className='container'>
        <form>
          <label htmlFor='name' label='name'>
            <p>Type your name here: </p>

            <input
              id='name'
              type='text'
              value={name}
              onChange={onInputChange}
            />
          </label>
          <button disabled={name === ''} onClick={onNextChange}>
            Next
          </button>
        </form>
      </section>
    </div>
  );
};

export default Name;
