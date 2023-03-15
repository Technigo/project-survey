import React from 'react';

export const Result = ({ power, hero }) => {
  return (
    <div className="results">
      <h3>What a dream!</h3>
      <p>Psst, let your soul <b>{hero}</b>, you have <b>{power}</b> powers.
      </p>
    </div>
  )
}