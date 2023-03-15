/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../index.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <form>
      <p>Let's begin! What is your name?</p>
      <span className="questionTitle">Name: </span><input
        type="text"
        value={name}
        onChange={handleNameChange} />
    </form>
  );
};