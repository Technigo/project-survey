import React from 'react';

const Name = ({ name, onInputChange, onNextChange }) => {
  return (
    <section className='container'>
      <h2 className='page-title'>What should I call you?</h2>
      <div>
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
      </div>
    </section>
  );
};

export default Name;
