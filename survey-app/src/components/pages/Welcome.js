import React from 'react';

import Buttons from '../partials/Buttons';

const Welcome = ({ nextPage }) => {
  return (
    <section className='welcome page'>
      <div className='overlay' />
      <h1>Workplace Flexibility Survey</h1>
      <p className='text-content'>We’d love to hear your thoughts on <br />
        workplace flexibility. Care to share?
      </p>
      <Buttons nextPage={nextPage} innerText="Sure, let's go" />
      <p className='time'>
        <img className="icon" src={'/images/clock.png'} alt='clock icon' />
        Takes 1 min
      </p>
    </section>
  )
};

export default Welcome;