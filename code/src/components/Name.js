/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <label htmlFor="name"><h3>What&apos;s your name?</h3></label>
      <input
        id="name"
        className="input-field"
        type="text"
        value={name}
        onChange={handleNameChange}
        aria-label="Name" />
    </>
  );
}
export default Name;