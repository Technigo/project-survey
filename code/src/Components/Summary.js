import React from 'react';
import '../index.css';

export const Summary = ({ name, reason, location }) => {
  return (
    <div>
      <p>Alright, {name}!</p>
      <p> You listen to music to {reason}.</p>
      <p> You prefer to listen to music {location}.</p>
    </div>
  )
}