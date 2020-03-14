import React, { useState } from 'react';

const occasions = [
  'Every day',
  'Several times a week',
  'Once a week or less'
]

export const Frequency = () => {
  const [frequency, setFrequency] = useState();
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      How often do you feel sad or depressed?
      {occasions.map((occasion) => (
        <label key={occasion}>
          <input
            type="radio"
            value={occasion}
            onChange={(event) => setFrequency(event.target.value)}
            checked={frequency === occasion} />
          {occasion}
        </label>
      ))}
    </form>
  )
}

export default Frequency