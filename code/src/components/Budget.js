/* eslint-disable linebreak-style */
import React from 'react';

export const Budget = ({ budget, setBudget }) => {
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  }

  const amountOfBudget = ['20-50 €', '50-100 €', 'let the champagne coming in']

  return (
    <div className="questionsContainer">
      <form>
        <h3>How much can you spend this evening?</h3>
      Amount of budget:
        {amountOfBudget.map((group) => (
          <lable key={group}>
            <input
              className="allRadioButtons"
              type="radio"
              value={group}
              onChange={handleBudgetChange}
              checked={budget === group} />
            {group}
          </lable>
        ))}
      </form>
    </div>
  )
};