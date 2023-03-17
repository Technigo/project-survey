import React from 'react';

export const Purchase = ({ purchase, setPurchase, step, handleStepIncrease }) => {
  const handlePurchaseChange = (event) => {
    setPurchase(event.target.value);
  }

  const options = [
    'Yes',
    'No',
    'Do not know'
  ];

  const handleNextButtonClick = () => {
    if (!purchase) {
      alert('Please select an option.');
    } else {
      handleStepIncrease();
    }
  }

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
      <button type="button" onClick={handleNextButtonClick} required>Next</button>
    </div>
  );
};
