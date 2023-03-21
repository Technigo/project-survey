/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import React from 'react';

export const Result = ({ name, animal, job, color, verb, adjective }) => {
  return (
    <div className="typewriter">
      <p>Here we go, {name}!
      The {animal} wanted to be a {job}, but turned a funny shade of {color} after trying to {verb}! What a {adjective} shame.
      </p>
    </div>
  )
}