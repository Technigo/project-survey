import React from 'react';

export const Name = ({ name, setName, handleStepIncrease }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="name-container">
      <p>What is your name, traveller?</p>
      <input type="text" value={name} onChange={handleNameChange} />
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}