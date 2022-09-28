import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <main>
      <form>
        <p>What is your name?</p>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </form>
    </main>
  );
}