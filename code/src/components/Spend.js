import React from 'react';

const amount = [
  '100-150€',
  '150-200€',
  '200€+'
]

export const Spend = ({ spend, setSpend }) => {
  const handleSpendChange = (event) => {
    setSpend(event.target.value)
  }

  return (
    <>
      <h1>How much are you willing to spend on a pair of sneakers you like?</h1>
      <form>
        <p>Amount:</p>
        {amount.map((eachAmount) => (
          <label className="radio-btn-control" key={eachAmount} htmlFor="AmountRadioButtons">
            {' '}
            {eachAmount}
            <input
              name="radio"
              className="radio-btn"
              id="AmountRadioButtons"
              type="radio"
              value={eachAmount}
              onChange={handleSpendChange}
              checked={spend === eachAmount} />
          </label>
        ))}
      </form>
    </>
  );
};