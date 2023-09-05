/* eslint-disable max-len */
import React from 'react';

const Summary = ({ firstName, ageGroup, devices, genre, song }) => {
  return (
    <section className="summary-wrapper">
      <ul>
        <li>Name: {firstName}</li>
        <li>Age: {ageGroup}</li>
        <li>Device(s) used: {devices.join(', ')}</li>
        <li>Genre: {genre} music</li>
        <li>Song: &quot;{song}&quot;</li>
      </ul>
      <h4>Thank you so much for taking the time to answer my survey :)</h4>
      <button
        type="button"
        className="button"
        onClick={() => window.location.reload()}>
        Retake survey
      </button>
    </section>
  )
}

export default Summary;