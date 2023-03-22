/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import React from 'react';

export const Result = ({ name, animal, job, color, verb, adjective }) => {
  return (
    <>
      <p className="typewriter">Here you go! </p>
      <p>The {animal} wanted to be a {job}, but turned a funny shade of {color} after trying to {verb}! What a {adjective} shame.
      </p>
      <p>Thank you for playing, {name}.</p>
    </>
  )
}