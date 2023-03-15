import React from 'react';

export const SixthQuestion = ({ jobSector, setJobSector }) => {
  const handleSixthAnswer = (event) => {
    setJobSector(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write the name of the first hobby or job you can think of. </p>
      <input type="text" value={jobSector} onChange={handleSixthAnswer} />
    </>
  )
}