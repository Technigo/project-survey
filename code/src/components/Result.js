/* eslint-disable */
import React from 'react';

export const Result = ({ book, language, version }) => {
  return (
    <div className="results">
      <p>You would like an {language} version of {book}, illustrated by {version}.
      Send it to all your friends and wait for christmas!
      </p>
      <label>
        <input className="email" type="email" aria-label="First checkbox" placeholder="Your friends emailadress here" />
        <input className="submit" type="submit" aria-label="Submit button" value="Submit" />
      </label>

    </div>
  )
}