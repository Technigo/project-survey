import React from 'react';

export const Purchase = ({ purchase, setPurchase, step }) => {
  const handlePurchaseChange = (event) => {
    setPurchase(event.target.value);
  }

  const options = [
    'Yes',
    'No',
    'Do not know'
  ];

  return (
    <div className="purchase-container">
      <h2>Question {step}</h2>
      <p>Would you consider making another purchase with us?</p>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="purchase"
            value={option}
            checked={purchase === option}
            onChange={handlePurchaseChange} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};