import React from 'react';

/* This component ask the user for there name and saves it */
export const Name = ({ name, setName }) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="question-wrapper">
      <div className="question">
        <h2 className="label" htmlFor="Age">What is your name?</h2>
        <input type="text" className="inputAndSelect" value={name} onChange={handleNameChange} />
      </div>
    </div>
  );
}

