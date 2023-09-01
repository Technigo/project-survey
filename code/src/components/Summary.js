/* eslint-disable max-len */
import React from 'react';

const Summary = ({ firstName, ageGroup, range, platforms, genre, favoriteSong }) => {
  let message;

  if (range <= 33) {
    message = 'Music is not that important to you.';
  } else if (range <= 66) {
    message = 'Music is quite important to you.';
  } else {
    message = 'Music means everything to you.';
  }
  return (
    <article className="summary-wrapper">
      <ul>
        <li>Name: {firstName}</li>
        <li>Age: {ageGroup}</li>
        <li>
          {message}
        </li>
        <li>Platform(s) used: {platforms.join(', ')}.</li>
        <li>Likes: {genre} music.</li>
        <li>Good song: {favoriteSong}.</li>
      </ul>
      <button
        type="button"
        className="button"
        onClick={() => window.location.reload()}>
        Retake survey
      </button>
      <p>Thank you for taking the time to answer my survey! If you&apos;d like to see more of my work, you can check out the links below.</p>
    </article>
  )
}

export default Summary;