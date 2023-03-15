import React from 'react';
import { Header } from './Header';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <><Header />
      <div className="inputbox">
        <label htmlFor="name">
          <p>Dare to dream? First type your name</p>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </label>
      </div>
    </>)
}

