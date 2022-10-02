import React from 'react';

export const Result = ({ age, gender, electricity }) => {
  return (
    <>
      <p>Your age is {age}.</p>
      <p>Your gender is {gender}.</p>
      <p>You are {electricity} worried about the raise in electricity costs.</p>

      <h5>Thank you for contributing to science!</h5>
    </>
  );
}