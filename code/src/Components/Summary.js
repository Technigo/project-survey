import React from 'react';
import '../index.css';

export const Summary = ({ name, reason, location, feel }) => {
  return (
    <div>
      <p>Great job, {name}! The results are in.</p>
      <p>You often find yourself listening to music to {reason}, and
      your favourite place to listen to music is {location}.
      Most music you listen to could be described as {feel}.
      </p>
    </div>
  )
}