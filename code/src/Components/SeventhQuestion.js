import React from 'react';

export const SeventhQuestion = ({ happyAdjective, setHappyAdjective }) => {
  const handleSeventhAnswer = (event) => {
    setHappyAdjective(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write an adjective that sounds complex: </p>
      <p className="descriptiveText"> Example: meticulous, flamboyant, eccentric</p>
      <input className="input-field" type="text" value={happyAdjective} onChange={handleSeventhAnswer} />
    </>
  )
}