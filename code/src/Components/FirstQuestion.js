import React from 'react';

export const FirstQuestion = ({ adjective, setAdjective }) => {
  const handleFirstAnswer = (event) => {
    setAdjective(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write an adjective</p>
      <p className="descriptiveText"> Example: red, big, happy</p>
      <input className="input-field" type="text" value={adjective} onChange={handleFirstAnswer} />
    </>
  )
}