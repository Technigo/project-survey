import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <form className="startpage">
      <h2 className="title">Employee Feedback</h2>
      <h3>Please tell us how we can improve our culture!</h3>
      <h3>What is your name?</h3>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        required />
    </form>
  );
}