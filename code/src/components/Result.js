import React from 'react';

export const Result = ({ name, effect, shape }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>You {effect} heard of the Bouba Kiki Effect</p>
      <p>You would call the shape to the right {shape}</p>
    </>
  );
}