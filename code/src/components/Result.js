/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import React from 'react';

export const Result = ({ name, animal, job, color, verb, adjective }) => {
  const handleReloadClick = () => {
    window.location.reload();
  }
  return (
    <>
      <p className="typewriter">Here we go! </p>
      <p>Your own personal <span className="madlibs-txt">MADLIBS</span> is:</p>
      <p className="result-txt">The {animal} wanted to be a {job}, but turned a funny shade of {color} after trying to {verb}! What a {adjective} shame.
      </p>
      <p>Thank you for playing, {name}. Want to play again?</p>
      <button id="restart-btn" type="button" onClick={handleReloadClick}>Start over</button>
    </>
  )
}