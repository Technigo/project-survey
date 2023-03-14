/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <label htmlFor="name">What is your name?</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        aria-label="Name" />
    </>
  );
}
export default Name;