import React from 'react';

const Question1 = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <p>What is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}

export default Question1;