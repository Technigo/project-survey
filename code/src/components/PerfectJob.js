import React from 'react';

const perfectJobOptions = [
  'Model (runway)',
  'Wizard',
  'Therapist'
]

export const defaultPerfectJobOption = perfectJobOptions[0]

const PerfectJob = ({ perfectJob, setPerfectJob }) => {
  const handlePerfectJobChange = (event) => {
    setPerfectJob(event.target.value);
  }

  return (
    <>
      <p>If Borzois could have human jobs, the most perfect one would be:</p>

      {perfectJobOptions.map((option) => (
        <label htmlFor={`perfectJob${option}`} key={option}>
          {option}
          <input
            className="radiobuttons"
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