/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <label className="form-label" htmlFor="name">What is your name?</label>
      <input id="name" name="name" placeholder="your name" type="text" minLength="1" value={name} onChange={handleNameChange} required />
    </>
  );
}