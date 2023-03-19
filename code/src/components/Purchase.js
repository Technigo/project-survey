import React from 'react';

export const Purchase = ({ purchase, setPurchase, step, handleStepIncrease }) => {
  const handlePurchaseChange = (event) => {
    setPurchase(event.target.value);
  }

  const options = [
    'Yes',
    'No',
    'Don&apos;t know'
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
      <img src="/images/fashion.jpg" alt="fashion clothing" className="fashion-image" />
      <div className="right-container">
        <div className="purchase-header">
          <h2>Question {step}</h2>
          <p>Would you consider making another purchase with us?</p>
        </div>
        <div className="purchase-options-container">
          <div className="purchase-options">
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
          <button id="next-button" type="button" onClick={handleNextButtonClick} required>Next</button>
        </div>
      </div>
    </div>
  );
};
