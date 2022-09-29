import React from 'react';

const Frequency = ({ userfrequency, setUserfrequency }) => {
  const frequencyGroups = ['week-days', 'weekends']

  return (
    <div>
      Frequency:
      {frequencyGroups.map((frequency) => (
        <label key={frequency} htmlFor="frequency">
          <input
            type="checkbox"
            value={frequency}
            onChange={(event) => setUserfrequency(event.target.checked)}
            checked={userfrequency === frequency} />
          {frequency}
        </label>
      ))}
    </div>
  )
}

export default Frequency;