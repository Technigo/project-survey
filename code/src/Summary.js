import React from 'react';

// import { locations } from './Answers';

const Summary = ({ location, rating, feedback }) => {
  // console.log(locations);
  return (
    <div>
      <p>Thank you for spending some time on this evaluation!</p>
      <h2>Here is a summary of your answers:</h2>
      <h3>Your location: <span className="summary-answer">{location}</span></h3>
      <h3>Your mood after this week: <span className="summary-answer">{rating}</span></h3>
      <h3>Your feedback: <span className="summary-answer">{feedback}</span></h3>
    </div>
  )
}

export default Summary;