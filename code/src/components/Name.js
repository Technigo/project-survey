import React from 'react';

export const Name = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="content-container">
      <p className="p-step">Current step: {step} / 7</p>
      <h4>Let&apos;s start of by introducing ourselves!
        What&apos;s your name?
      </h4>
      <input
        type="text"
        value={name}
        className="name-input"
        onChange={handleNameChange} />
    </div>
  );
}