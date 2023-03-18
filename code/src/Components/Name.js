import React from 'react';
import { Header } from './Header';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <><Header />
      <div className="nameComponent">
        <p>Start by typing your name in the box below:</p>
        <input
          tabIndex="0"
          aria-label="Name field"
          type="text"
          placeholder="Enter name here.."
          className="inputField"
          onChange={handleNameChange}
          value={name} />

      </div>
    </>

  )
}