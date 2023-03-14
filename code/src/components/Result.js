/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Result = ({ name, love, drink }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Do you love cats? {love}</p>
      <p>Your favorite drink is {drink}</p>
    </>
  );
}

export default Result;