import React from 'react'

const Summary = ({ nameInput, ageInput, activityInput, emailInput }) => {
  return (
    <section>
    <h2>Thank you for showing interest. Your information was sent perfectly. We will get back to you as soon as possible. </h2>
    <p>Name : {nameInput}</p>
    <p>Age : {ageInput}</p>
    <p>Volunteer activities: {activityInput}</p>
    <p>E-mail: {emailInput} </p>

    </section>
  )
}

export default Summary;