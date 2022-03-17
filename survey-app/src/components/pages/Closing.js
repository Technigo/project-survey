import React from 'react';

import Buttons from '../partials/Buttons';

const refreshPage = () => window.location.reload();

const Closing = ({ closingData }) => {
  const { age, hours, location, productivity, stress } = closingData;

  const hoursResponse = () => {
    return (hours === 'Yes')
      ? 'You prefer a company that offers flexible work hours.'
      : 'You do not prefer a company that offers flexible work hours.'
  }

  const productivityResponse = () => {
    return (productivity >= 3) ? 'You feel you would be more productive in a flexible work environment.'
      : (productivity > 0) ? 'You feel you might be more productive in a flexible work environment.'
      : 'You feel your productivity level would not change in a flexible work environment.'
  }

  const stressResponse = () => {
    return (stress >= 3) ? 'You feel you would be less stressed in a flexible work environment.'
      : (stress > 0) ? 'You feel you might be less stressed in a flexible work environment.'
      : 'You feel your stress level would not change in a flexible work environment.'
  }

  const buttonData = {
    nextPage: refreshPage,
    innerText: 'reload'
  }

  return (
    <section className='closing page'>
      <h2>Thanks for sharing! Your feedback is greatly appreciated.</h2>
      <ul>
        <li>You are in the {age} age group.</li>
        <li>{hoursResponse()}</li>
        <li>You prefer to work <span className='location-item'>{location}.</span></li>
        <li>{productivityResponse()}</li>
        <li>{stressResponse()}</li>
      </ul>
      <Buttons buttonData={buttonData} />
    </section>
  )
};

export default Closing;
