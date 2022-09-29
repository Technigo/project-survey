import React from 'react';

const recurrenceOpt = ['Weekly', 'Bi-weekly', 'Monthly', 'Quarterly', 'Yearly'];

const RecurrenceQ = ({ recurrence, OnRecurrenceInputChange, nextQ }) => {
  return (
    <form>
      <h2>How often would you like a subscription box?</h2>
      {recurrenceOpt.map((choice) => (
        <label htmlFor="choice" key={choice}>
          <input
            type="radio"
            value={recurrence}
            onChange={OnRecurrenceInputChange}
            checked={recurrence === choice} />
          {choice}
        </label>
      ))}
      <button type="button" onClick={nextQ} label="next">Next</button>
    </form>
  )
};

export default RecurrenceQ;