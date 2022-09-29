import React from 'react';

const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>What is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </>
  );
}
export default Name