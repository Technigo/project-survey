import React from 'react';

const Summary = ({ location, rating, feedback }) => {
  return (
    <div>
      <p>Your answers:</p>
      <p>{location}</p>
      <p>{rating}</p>
      <p>{feedback}</p>
    </div>
  )
}

export default Summary;