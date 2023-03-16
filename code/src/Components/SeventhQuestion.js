import React from 'react';

export const SeventhQuestion = ({ happyAdjective, setHappyAdjective }) => {
  const handleSeventhAnswer = (event) => {
    setHappyAdjective(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write an adjective that sounds complex: </p>
      <input type="text" value={happyAdjective} onChange={handleSeventhAnswer} />
    </>
  )
}