import React from 'react';

export const Name = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="name-container">
      <h2>Welcome to our Customer Survey!</h2>
      <p>Please take some time to fill this out in order for us</p>
      <p>to give you the best possible customer experience.</p>
      <p>First question, what is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} step={step} />
    </div>
  )
}