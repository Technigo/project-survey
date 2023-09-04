/* eslint-disable max-len */
import React from 'react';

const Summary = ({ firstName, ageGroup, devices, genre, favoriteSong }) => {
  return (
    <article className="summary-wrapper">
      <ul>
        <li>Name: {firstName}</li>
        <li>Age: {ageGroup}</li>
        <li>Platform(s) used: {devices.join(', ')}.</li>
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