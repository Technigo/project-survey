/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <input className="name-input-field" name="name" placeholder="username" type="text" minLength="1" value={name} onChange={handleNameChange} required />
  );
}