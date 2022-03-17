import React from 'react';

const Dream = ({ dream, onDreamChange, onNextChange }) => {
  return (
    <section className='container'>
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
          <button disabled={dream === ''} onClick={onNextChange}>
            Next
          </button>
        </form>
      </div>
    </section>
  );
};

export default Dream;
