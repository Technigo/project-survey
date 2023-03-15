import React from 'react';

export const Overall = ({ overall, setOverall }) => {
  const handleOverallChange = (event) => {
    setOverall(event.target.value);
  }
  return (
    <>
      <p>What is your overall perception of us?</p>
      <input type="text" value={overall} onChange={handleOverallChange} />
    </>
  )
}