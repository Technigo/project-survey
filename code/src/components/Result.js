import React from 'react';

export const Result = ({ name, age, recycle, drink }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>Your age is {age}</p>
      <p>Your recyceling rutin is {recycle}</p>
      <p>Your favourite drink is {drink}</p>
    </>
  );
}
