import React from 'react';

export const Who = ({ who, setWho, step }) => {
  const handleWhoChange = (event) => {
    setWho(event.target.value);
  }
  return (
    <div className="name-container">
      <p>Current step: {step} / 7</p>
      <h4> we are almost there, who would you like to have next to you?</h4>
      <input type="text" value={who} onChange={handleWhoChange} />
    </div>
  );
}