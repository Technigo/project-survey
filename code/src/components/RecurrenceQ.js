import React from 'react';

const recurrenceOpt = [
  'Weekly',
  'Monthly',
  'Quarterly',
  'Yearly'
];

const RecurrenceQ = ({ recurrence, OnRecurrenceInputChange, nextQ }) => {
  return (
    <form onSubmit={nextQ}>
      <h2>How often would you like to receive the box?</h2>
      {recurrenceOpt.map((choice) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label key={choice} className="recurrence">
          <input
            id="recurrence"
            type="radio"
            name="recurrence"
            aria-label="choose recurrence"
            value={choice}
            onChange={OnRecurrenceInputChange}
            checked={recurrence === choice}
            required />
          {choice}
        </label>
      ))}
      <button type="submit" label="next">Next</button>
    </form>
  )
};

export default RecurrenceQ;