import React from 'react';

/* This component ask the user for there name and saves it */
export const Name = ({ name, setName }) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="question-wrapper">
      <div className="question">
        <label className="label" htmlFor="Age">What is your name?</label>
        <input type="text" className="inputAndSelect" value={name} onChange={handleNameChange} />
      </div>
    </div>
  );
}

