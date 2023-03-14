import React from 'react';

const Name = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container name">
      <h2>Question {step}</h2>
      <p>What is your name?</p>
      <p>Current state: {name}</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default Name;
