import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="question-wrapper">
      <div className="question">
        <h1>Welcome to the New York times recycle survey of the year ♻️</h1>
        <label htmlFor='Age'>What is your name?</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
    </div>
  );
}

