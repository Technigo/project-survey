import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <form className="startpage">
      <h2 className="title">Employee Feedback</h2>
      <h3>Please tell us how we can improve our culture!</h3>
      <p>What is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} required />
      <button type="button" onClick={handleNameChange}>Next Question</button>
    </form>
  );
};