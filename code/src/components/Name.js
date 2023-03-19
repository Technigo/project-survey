/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Name = ({ name, setName, step, handleStepIncrease }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    handleStepIncrease();
  };

  return (
    <div className="name-container">
      <img src="/images/fashion.jpg" alt="fashion clothing" className="fashion-image" />
      <div className="right-container">
        <div className="name-header">
          <h2>Welcome to our Customer Survey!</h2>
          <p>Please take some time to fill this out in order for us to give you the best possible customer experience.</p>
          <p>First question, what&apos;s your name?</p>
        </div>
        <div className="name-form">
          <form>
            <div className="name-input">
              <label htmlFor="nameInput">Name:</label>
              <input
                type="text"
                id="nameInput"
                name="name"
                required
                pattern="[A-Za-z ]+"
                value={name}
                onChange={handleNameChange}
                step={step} />
            </div>
            <div className="next-button">
              <button type="submit" onClick={handleNextClick} required>
              Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
