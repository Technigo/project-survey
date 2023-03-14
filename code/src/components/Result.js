/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Result = ({ name, love, drink }) => {
  return (
    <>
      <p>Your name is {name}.</p>
      <p>Between 1 and 10 you love cats {love}.</p>
      <p>Your favorite drink is {drink}.</p>
    </>
  );
}

export default Result;