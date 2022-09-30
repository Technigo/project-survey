import React from 'react';

const perfectJobOptions = [
  'Model (runway)',
  'Wizard',
  'Therapist'
]

export const defaultPerfectJobOption = perfectJobOptions[2]

const PerfectJob = ({ perfectJob, setPerfectJob }) => {
  const handlePerfectJobChange = (event) => {
    setPerfectJob(event.target.value);
  }

  return (
    <>
      <p>If Borzois had human jobs, the perfect one would be:</p>

      {perfectJobOptions.map((option) => (
        <label htmlFor={`perfectJob${option}`} key={option}>
          {option}
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