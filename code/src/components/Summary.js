import React from 'react';

const Summary = ({
  nameInput,
  selectInput,
  radioInput
}) => {
  return (
    <div>
      <p> Summary</p>
      <p>Name: {nameInput}</p>
      <p>Input: {selectInput}</p>
      <p>Cuteness {radioInput}</p>
    </div>
  )
}

export default Summary;