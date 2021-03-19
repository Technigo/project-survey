import React from 'react';

export const Summary = ({ name, checked, value }) => {
  
  return (
    <div className="summary-section">
      <h1>Thank you for your time! We will contact you if you are the lucky one to win!</h1>
      <h2>Summary of your answers:</h2>
      <p>Your favorite cat is {checked} and {value}. Your favorite cat name ever is {name}! We couldn't agree with you more!</p>

    </div>

  );
};