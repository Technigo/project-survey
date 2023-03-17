import React from 'react';

export const ThankYou = ({ name, hear, overall, delivery, purchase, rate, handleReset }) => {
  return (
    <div className="thanks-container">
      <div className="thanks-header">
        <h2>Thank you for participating in the survey!</h2>
        <p>Here is a summary of your responses:</p>
      </div>
      <div className="results">
        <ul>
          <li>Name: {name}</li>
          <li>How did you hear about us?: {hear}</li>
          <li>Overall satisfaction: {overall}</li>
          <li>Delivery satisfaction: {delivery}</li>
          <li>Purchase satisfaction: {purchase}</li>
          <li>How likely are you to recommend us?: {rate}</li>
        </ul>
        <div className="go-again-btn">
          <button id="thanks-btn" type="button" onClick={handleReset}>One more time</button>
        </div>
      </div>
    </div>
  );
}