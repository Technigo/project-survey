import React from 'react';

export const NinthQuestion = ({ infinitiveVerb, setInfinitiveVerb }) => {
  const handleNinthAnswer = (event) => {
    setInfinitiveVerb(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write an infinitive verb</p>
      <p className="descriptiveText"> e.g. run, complain, eat </p>
      <input aria-label="input field" className="input-field" type="text" value={infinitiveVerb} onChange={handleNinthAnswer} />
    </>
  )
}