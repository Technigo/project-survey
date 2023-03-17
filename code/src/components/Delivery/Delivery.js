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

  return (
    <div className="delivery-container">
      <h2>Question {step}</h2>
      <p>Did you receive your order on time, as promised?</p>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="delivery"
            value={option}
            checked={delivery === option}
            onChange={handleDeliveryChange} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      <button type="button" onClick={handleNextButtonClick} required>Next</button>
    </div>
  );
};
