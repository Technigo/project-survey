import React from 'react';

export const Result = ({ power, hero, name }) => {
  return (
    <div className="results">
      <h3>What a dream <b>{name}</b></h3>
      <p>Psst, let your soul <b>{hero}</b>, you have <b>{power}</b> powers.
      </p>
    </div>
  )
}