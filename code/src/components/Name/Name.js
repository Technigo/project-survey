import React from 'react';
import './Name.css'

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>
        We are thrilled to have you as our guest at the Mountain Lodge!
      </p>
      <p>
        To ensure that your stay is everything you hope it to be and more, we
        kindly ask that you take a moment to complete this questionnaire before
        your arrival.
      </p>
      <p>Enter name:</p>
      <input
        type="text"
        onChange={handleNameChange}
        value={name}
        placeholder="Enter name here"
        required />
    </>
  )
};