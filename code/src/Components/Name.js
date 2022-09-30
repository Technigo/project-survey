import React from 'react';
import { Header } from './Header';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log('value is:', event.target.value);
  }

  return (
    <><Header />
      <div className="nameComponent">

        <p>Please type your name to start:</p>
        <input
          type="text"
          onChange={handleNameChange}
          value={name} />

      </div>
    </>

  )
}