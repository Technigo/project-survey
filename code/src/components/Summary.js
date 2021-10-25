import React from 'react'

const Summary = ({ nameInput, activityInput, hearAboutInput, emailInput }) => {
  return (
    <section>
    <h2>Thank you for showing interest. Your information was sent perfectly. </h2>
    <p>Name: {nameInput}</p>
    <p>Volunteer activities: {activityInput}</p>
    <p>Where did you hear about us? : {hearAboutInput}</p>
    <p>E-mail: {emailInput} </p>
    </section>
  )
}

export default Summary;