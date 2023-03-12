import React from 'react';

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Thank you {props.name}, this was helpful!</h2>
      <h3>The best thing about our site: {props.location}</h3>
      <h3>Your overall impression: {props.ageGroup}</h3>
      <h3><i>Have a nice day!</i></h3>
    </div>
  )
}