import React from 'react'
import './summary.css'

export const Summary = ({ firstName, lastName, occupation, location, education, wantsNewsletter, ageGroup, gender }) => {

  const news = wantsNewsletter ? 'Recive newsletter' : 'Don\'t recive newsletter'

  return (
    <div className="summary">
      <h1>{firstName} {lastName}</h1>
      <div className="summarytext">
        <div className="text">
          <p>Occupation: <strong>{occupation}</strong></p>
          <p>Location: <strong>{location}</strong></p>
          <p>Education: <strong>{education}</strong></p></div>
        <div className="text">
          <p>Age group: <strong>{ageGroup}</strong></p>
          <p>Gender: <strong>{gender}</strong></p>
          <p><strong>{news}</strong></p>
        </div>
      </div>
    </div>
  )
}



