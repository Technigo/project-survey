import React from 'react';

const WelcomePage = ({ onNextChange }) => {
  return (
    <section className='container'>
      <div className='background-transparent'>
        <form>
          <label htmlFor='welcomeInput'>
            <h1 className='header'>VACATION SURVEY</h1>
            <p>
              <span>Let us know what kind of destination you like!</span>
            </p>
          </label>
          <button className='btn' onClick={onNextChange}>
            Start here!
          </button>
        </form>
      </div>
    </section>
  );
};

export default WelcomePage;
