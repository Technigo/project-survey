/* eslint-disable max-len */
import React from 'react';

// image
import musicIllustration2 from 'assets/images/music file2-03 copy.png';

const Summary = ({ firstName, ageGroup, devices, genre, song }) => {
  return (
    <section className="summary-wrapper">
      <h4>Thank you so much for taking the time to answer my survey, {firstName}!</h4>
      <div>
        <ul>
          <li>Name: {firstName}</li>
          <li>Age: {ageGroup}</li>
          <li>Device(s) used: {devices.join(', ')}</li>
          <li>Genre: {genre} music</li>
          {song.length >= 1 && (
            <li>Song(optional): &quot;{song}&quot;</li>
          )}
        </ul>
        <img src={musicIllustration2} alt="illustration" aria-hidden="true" className="illustration" />
      </div>
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