import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <h2>Welcome to our Customer Survey!</h2>
      <p>Please take some time to fill this out in order for us</p>
      <p>to give you the best possible customer experience.</p>
      <p>Firstly, what is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </>
  )
}