/* eslint-disable max-len */
import React from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Summary = ({ firstName, ageGroup, devices, genre, song }) => {
  return (
    <section className="summary-wrapper">
      <ul>
        <li>Name: {firstName}</li>
        <li>Age: {ageGroup}</li>
        <li>Device(s) used: {devices.join(', ')}.</li>
        <li>Genre: {genre} music.</li>
        <li>Song: {song}.</li>
      </ul>
      <button
        type="button"
        className="button"
        onClick={() => window.location.reload()}>
        Retake survey
      </button>
      <p>Thank you so much for taking the time to answer my survey! If you&apos;d like to see more of my work, you can check out the links below.</p>
      <section className="contact">
        <a href="https://www.github.com" className="button icon-button">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.github.com" className="button icon-button">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </section>
  )
}

export default Summary;