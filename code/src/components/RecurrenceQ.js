import React, { useState } from 'react';

const recurrenceOpt = ['Weekly', 'Bi-weekly', 'Monthly', 'Quarterly', 'Yearly'];

const RecurrenceQ = () => {
  const [recurrence, setRecurrence] = useState();

  return (
    <div className="container">
      <form>
      How often would you like a subscription box?
        {recurrenceOpt.map((choice) => (
          <label htmlFor="choice" key={choice}>
            <input
              type="radio"
              value={recurrence}
              onChange={(event) => setRecurrence(event.target.value)}
              checked={recurrence === choice} />
            {choice}
          </label>
        ))}
      </form>
    </div>
  )
};

export default RecurrenceQ