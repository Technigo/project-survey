/* eslint-disable linebreak-style */
import React from 'react';

export const Result = ({ name, age, gender }) => {
  return (
    <>
      <p>Your name is: {name}</p>
      <p>You are: {age} years old</p>
      <p>You identify as: {gender}</p>
    </>
  )
}