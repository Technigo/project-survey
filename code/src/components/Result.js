import React from 'react';

export const Result = ({ power, hero }) => {
  return (
    <div className="results">
      <h3>Your dream has come true!</h3>
      <p>You are a <b>{hero}</b> and you will <b>{power}</b>.
      </p>
    </div>
  )
}