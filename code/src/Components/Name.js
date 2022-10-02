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
          tabIndex="0"
          aria-label="Insert name"
          type="text"
          placeholder="Insert your name here"
          className="inputField"
          onChange={handleNameChange}
          value={name} />

      </div>
    </>

  )
}