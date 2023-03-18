import React from 'react';

export const Delivery = ({ delivery, setDelivery, step, handleStepIncrease }) => {
  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  }

  const options = [
    'Yes',
    'No',
    'Do not know'
  ];

  const handleNextButtonClick = () => {
    if (!delivery) {
      alert('Please select an option.');
    } else {
      handleStepIncrease();
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleNextButtonClick();
    }
  }

  return (
    <div className="delivery-container">
      <img src="/images/fashion.jpg" alt="fashion clothing" className="fashion-image" />
      <div className="right-container">
        <div className="text-container">
          <div className="delivery-header">
            <h2>Question {step}</h2>
            <p>Did you receive your order on time, as promised?</p>
          </div>
          <div className="delivery-options">
            {options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  name="delivery"
                  value={option}
                  checked={delivery === option}
                  onChange={handleDeliveryChange}
                  onKeyDown={handleKeyDown}
                  tabIndex="0" />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="next-button">
              <button id="next-button" type="button" onClick={handleNextButtonClick} required>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}