import React from 'react';

const Summary = ({
  nameInput,
  selectInput,
  radioInput
}) => {
  return (
    <div>
      <p>{radioInput}, {nameInput}!</p>
    </div>
  )
}

export default Summary;