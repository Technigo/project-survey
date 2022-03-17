import React from 'react';

const WelcomePage = ({ onNextChange }) => {
  return (
    <section className='container'>
      <form>
        <label htmlFor='welcomeInput'>
          <h1 className='header'>VACATION SURVEY</h1>
          <p>Let us know what kind of destinations you like!</p>
        </label>
        <button onClick={onNextChange}>Start here!</button>
      </form>
    </section>
  );
};

export default WelcomePage;
