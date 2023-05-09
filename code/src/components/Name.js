/* eslint-disable linebreak-style */

import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <label htmlFor="username-input">
      <input name="username-input" id="username-input" placeholder="enter your username" type="text" minLength="1" value={name} onChange={handleNameChange} required />
    </label>
  );
}