import React from 'react';

export const Summary = ({ name, checked, value }) => {
  
  return (
    <div className="summary-section">
      <h2>Thank you for your time</h2>
      <p>You like cats with {checked} that is {value}. You want a cat with the name {name}.</p>
    </div>

  )
}