/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Result = ({ name, love, favorite }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Do you love cats? {love}</p>
      <p>Your favorite cartoon cat is {favorite}</p>
    </>
  );
}

export default Result;