import React from 'react';

const Closing = (data) => {
  const {age, hours, location, productivity, stress} = data;

  const hoursResponse = () => {
    return (hours === 'yes')
      ? 'You prefer a company that offers flexible work hours.'
      : 'You do not prefer a company that offers flexible work hours.'
  }

  const productivityResponse = () => {
    return (productivity >= 3 )
      ? 'You feel you would be more productive in a flexible work environment.'
      : 'You feel you would be less productive in a flexible work environment.'
  }

  const stressResponse = () => {
    return (stress >= 3) 
      ? 'You feel you would be less stressed in a flexible work environment.'
      : 'You feel your stress level would not change in a flexible work environment.'
  }

  return (
    <section className='page'>
      <h2>Thank </h2>
      <p>You are in the {age} age group.</p>
      <p>{hoursResponse()}</p>
      <p>You prefer to work {location}</p>
      <p>{productivityResponse()}</p>
      <p>{stressResponse()}</p>
    </section>
  )
}

export default Closing;
