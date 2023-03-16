import React from 'react';
import './components.css';
// This could be renamed dream
export const CreatedDream = ({ name, famousPerson }) => {
  return (
    <>
      <h2 className="title">So, based on your answers, this will be your dream:</h2>
      <p>{name}, tonight you will dream that {famousPerson} and you will meet at </p>
      <p>Thank you for participating!</p>
    </>
  );
}