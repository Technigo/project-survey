import React from 'react'

export const Summary = (props) => {

  const { name, email, option, interest } = props

  return (
    <>
      <h1 tabIndex="0">Thank you for contacting us at Adventure World!</h1>
      <p tabIndex="0"> {name}, we will send you an offer for your dream {interest} vacation to your email {email}. 
      We are happy to recomend {option} for your {interest} vacation, it will truly be a holiday that you will never forget!</p>
    </>
  )
}