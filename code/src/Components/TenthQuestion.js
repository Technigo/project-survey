import React from 'react';

export const TenthQuestion = ({ descriptiveAdjective, setDescriptiveAdjective }) => {
  const handleTenthAnswer = (event) => {
    setDescriptiveAdjective(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write a descriptive adjective</p>
      <p className="descriptiveText"> e.g. cheeky, generous, blue </p>
      <input aria-label="input field" className="input-field" type="text" value={descriptiveAdjective} onChange={handleTenthAnswer} />
    </>
  )
}