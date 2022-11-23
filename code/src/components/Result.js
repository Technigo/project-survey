/* eslint-disable */
import React from 'react';

export const Result = ({ book, language, version }) => {
  return (
    <div className="results">
      <h3>Your wishlist is now done!</h3>
      <p>You would like an <b>{language}</b> version of <b>{book}</b>, illustrated by <b>{version}</b>.

      </p>

    </div>
  )
}