import React from 'react';
import './components.css';

export const Summary = ({ name, ageGroup }) => {
  return (
    <>
      <h2>To sum it up:</h2>
      <p>Your name is {name}</p>
      <p>You are between {ageGroup} years old</p>
      <h3>Thank you for participating!</h3>
    </>
  );
}