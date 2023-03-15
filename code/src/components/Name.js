import React from 'react';

export const Name = ({ name, setName, counter }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);

    console.log('Name:', event.target.value);
  }

  return (
    <form>
      <div className="inputName">
        <p>What is your name?</p>
        <input type="text" onChange={handleNameChange} value={name} counter={counter} />
      </div>
    </form>
  );
}