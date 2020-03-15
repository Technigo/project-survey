import React, { useState } from 'react';

const occasions = ['every day', 'several times a week', 'once a week or less'];

export const Frequency = props => {
  const { frequency, setFrequency } = props;
  return (
    <form onSubmit={event => event.preventDefault()}>
      How often do you feel stressed?
      {occasions.map(occasion => (
        <label key={occasion}>
          <input
            type='radio'
            value={occasion}
            onChange={event => setFrequency(event.target.value)}
            checked={frequency === occasion}
          />
          {occasion}
        </label>
      ))}
    </form>
  );
};

export default Frequency;
