import React from 'react';

const Summary = ({
  nameInput,
  selectInput,
  radioInput
}) => {
  
  return (
    <div>
      
      <div className="Greeting">{radioInput}, {nameInput}!</div>
    </div>
  )
}

export default Summary;