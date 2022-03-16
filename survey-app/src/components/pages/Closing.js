import React from 'react';

import Buttons from '../partials/Buttons';

const refreshPage = () => window.location.reload();

const Closing = (data) => {
  const { age, hours, location, productivity, stress } = data;

  const hoursResponse = () => {
    return (hours === 'yes')
      ? 'You prefer a company that offers flexible work hours.'
      : 'You do not prefer a company that offers flexible work hours.'
  }

  const productivityResponse = () => {
    return (productivity >= 3)
      ? 'You feel you would be more productive in a flexible work environment.'
      : 'You feel you would be less productive in a flexible work environment.'
  }

  const stressResponse = () => {
    return (stress >= 3)
      ? 'You feel you would be less stressed in a flexible work environment.'
      : 'You feel your stress level would not change in a flexible work environment.'
  }

  return (
    <section className='closing page'>
      <h2>Thanks for sharing! Your feedback is greatly appreciated.</h2>
      <ul>
        <li>You are in the {age} age group.</li>
        <li>You prefer to work {location}.</li>
        <li>{hoursResponse()}</li>
        <li>{productivityResponse()}</li>
        <li>{stressResponse()}</li>
      </ul>
      <Buttons nextPage={refreshPage} innerText='reload' />
    </section>
  )
};

export default Closing;
