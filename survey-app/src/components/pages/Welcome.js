import React from 'react';

import Buttons from '../partials/Buttons';
import clock from '../../images/clock.png';

const Welcome = ({ changePage }) => {
  return (
    <section className='welcome page'>
      <div className='overlay' />
      <h1>Workplace Flexibility Survey</h1>
      <p className='text-content'>We’d love to hear your thoughts on <br />
        workplace flexibility. Care to share?
      </p>
      <Buttons changePage={changePage} innerText="Sure, let's go" />
      <p className='time'>
        <img className="icon" src={clock} alt='clock icon' />
        Takes 1 min
      </p>
    </section>
  )
};

export default Welcome;