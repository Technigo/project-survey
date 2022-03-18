import React from 'react';
import logo from 'assets/harry.svg';

const Intro = ({ onStepChange }) => {
  return (
    <section className='questionWrapper'>
      <div className='question'>
        <img className='logo' src={logo} alt='harry potter logo' />
        <h1 tabindex='0'>Who would you choose to be in Harry Potter?</h1>
        <button className='btn' onClick={onStepChange}>
          {' '}
          Start{' '}
        </button>
      </div>
    </section>
  );
};

export default Intro;
