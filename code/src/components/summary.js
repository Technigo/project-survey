import React from 'react'

const Summary = ({ nameInput, surnameInput, emailInput }) => {
  return (
    <section>
      <h2>My values from form :</h2>
      <p>Full Name : {nameInput}</p>
      <p>Surname : {surnameInput}</p>
      <p>Email : {emailInput}</p>
    </section>
  )
}

export default Summary
