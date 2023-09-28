import React from 'react';

export const SixthQuestion = ({ jobSector, setJobSector }) => {
  const handleSixthAnswer = (event) => {
    setJobSector(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write the name of the first hobby or interest you can think of. </p>
      <p className="descriptiveText"> Example: knitting, football, programming</p>
      <input aria-label="input field" className="input-field" type="text" value={jobSector} onChange={handleSixthAnswer} />
    </>
  )
}