import React from 'react';
import './spend.css'

export const Spend = ({ spend, setSpend }) => {
  const handleSpendChange = (event) => {
    setSpend(event.target.value)
  }

  return (
    <>
      <h1>How much are you willing to spend on a pair of sneakers you like?</h1>
      <div className="slider-container">
        <p>10€</p>
        <form className="slider">
          <label htmlFor="Amount" aria-label="range slider amount">
            <input
              id="Amount"
              type="range"
              min="10"
              max="500"
              step="10"
              onChange={handleSpendChange}
              value={spend} />
          </label>
        </form>
        <p>500€</p>
      </div>
      <p>Amount choosen: {spend}€</p>
    </>
  );
};