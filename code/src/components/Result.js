import React from 'react';

export const Result = ({ name, color, pattern, size }) => {
  console.log({ name });

  return (
    <>
      <h1>Submitted:</h1>
      <p>Your name: {name}</p>
      <p>Colour: {color}</p>
      <p>Prefferd pattern: {pattern}</p>
      <p>Size: {size}</p>
    </>
  );
};