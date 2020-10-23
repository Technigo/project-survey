import React from 'react';

// import { locations } from './Answers';

const Summary = ({ location, rating, feedback }) => {
  // console.log(locations);
  return (
    <div>
      <p>Thank you for spending some time on this evaluation!</p>
      <h2>Here is a summary of your answers:</h2>
      <h3>Your location: {location}</h3>
      <h3>Your mood after this week: {rating}</h3>
      <h3>Your feedback: {feedback}</h3>
    </div>
  )
}

export default Summary;