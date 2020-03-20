import React from 'react'
//import "./summary.css"

export const Summary = ({ firstName, lastName, occupation, location, education, wantsNewsletter, ageGroup, gender }) => {

  const news = wantsNewsletter ? 'Recive newsletter' : 'Don\'t recive newsletter'

  return (
    <>
      <h1>{firstName} {lastName}</h1>
      <h2>You provided the following information:</h2>
      <h2>Occupation: {occupation}</h2>
      <h2>Location: {location}, Education: {education}</h2>
      <h2>Age group: {ageGroup}, Gender: {gender}</h2>
      <h2>{news}</h2>
    </>
  )
}



