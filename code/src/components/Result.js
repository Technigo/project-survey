/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import React from 'react';

export const Result = ({ name, animal, job, color, verb, adjective }) => {
  return (
    <>
      <p className="typewriter">Here we go! </p>
      <p>Your own personal MADLIBS is:</p>
      <p className="result-txt">The {animal} wanted to be a {job}, but turned a funny shade of {color} after trying to {verb}! What a {adjective} shame.
      </p>
      <p>Thank you for playing, {name}.</p>
    </>
  )
}