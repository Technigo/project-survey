import React from 'react';

export const FirstQuestion = ({ adjective, setAdjective }) => {
  const handleFirstAnswer = (event) => {
    setAdjective(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write an adjective</p>
      <input type="text" value={adjective} onChange={handleFirstAnswer} />
    </>
  )
}