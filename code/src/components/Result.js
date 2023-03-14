/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Result = ({ name, food, drink }) => {
  return (
    <>
      <p>Your name is  {name}.</p>
      <p>Your favorite food is  {food}.</p>
      <p>Your favorite drink is  {drink}.</p>
    </>
  );
}

export default Result;