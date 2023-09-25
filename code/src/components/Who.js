import React from 'react';

export const Who = ({ who, setWho, step }) => {
  const handleWhoChange = (event) => {
    setWho(event.target.value);
  }
  return (
    <div className="content-container">
      <p className="p-step">Current step: {step} / 7</p>
      <h4> We are almost there. Who would you like to have next to you?</h4>
      <input
        aria-label="with-who-input"
        type="text"
        value={who}
        className="name-input"
        placeholder="Type here"
        onChange={handleWhoChange} />
    </div>
  );
}