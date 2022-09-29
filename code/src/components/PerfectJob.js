import React from 'react';

const PerfectJob = ({ perfectJob, setPerfectJob }) => {
  const handlePerfectJobChange = (event) => {
    setPerfectJob(event.target.value);
  }
  return (
    <>
      <p>If Borzois had human jobs, the perfect one would be:</p>
      <input type="text" value={perfectJob} onChange={handlePerfectJobChange} />
    </>
  );
}

export default PerfectJob;