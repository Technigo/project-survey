/* eslint-disable max-len */
import React from 'react';

const Summary = ({ firstName, ageGroup, range, platforms, favoriteSong }) => {
  return (
    <>
      <p>Your name is {firstName}, you are {ageGroup} years old. Music is {range} important to you in life and you use {platforms} to listen to it.</p>
      <p>When asked about your favorite song, you said the following:</p>
      <p>{favoriteSong}</p>
      <button
        type="button"
        className="reload-button"
        onClick={() => window.location.reload()}>
        Retake survey
      </button>
    </>
  )
}

export default Summary;