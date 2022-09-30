import React from 'react';

const PerfectJob = ({ perfectJob, setPerfectJob }) => {
  const handlePerfectJobChange = (event) => {
    setPerfectJob(event.target.value);
  }

  const perfectJobOptions = [
    'Guard',
    'Goalie'
  ]

  return (
    <>
      <p>If Borzois had human jobs, the perfect one would be:</p>

      {perfectJobOptions.map((option) => (
        <label htmlFor={`perfectJob${option}`} key={option}>
            Guard
          <input
            id={`perfectJob${option}`}
            type="radio"
            value={option}
            onChange={handlePerfectJobChange}
            checked={perfectJob === option} />
        </label>
      ))}
    </>
  );
}

export default PerfectJob;