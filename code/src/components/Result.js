import React from 'react';

export const Result = ({ power, hero, name }) => {
  return (
    <div className="results">
      <h3>What a dream <b>{name}</b>!</h3>
      <p>Psst, let your soul <b>{hero}</b>, you have <b>{power}</b> powers.
        <span role="img" className="emoji" aria-label="img">🫶</span>
      </p>
    </div>
  )
}