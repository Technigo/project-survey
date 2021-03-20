import React from 'react';

export const Summary = ({ name, checked, value, email }) => {
  
  return (
    <section className="summary-section">
      <div className="thankyou">
        <h1 tabIndex="0">Thank you for your time! We will send an e-mail to {email} if you are the lucky one to win!</h1>
        <h2 tabIndex="0">Summary of your answers:</h2>
        <p tabIndex="0">Your favorite cat is {checked} and {value}.</p>
        <p tabIndex="0">Your favorite cat name ever is {name}!</p>
      </div>
      <div className="summary">
      <p>We couldn't agree with you more!</p>
      </div>
    </section>
  );
};