import React from 'react'
import Button from './Button'

const Summary = ({ values, onButtonResponse }) => {
  return (
    <div>
      <h1>Does this look ok?</h1>
      <p>First name: {values.firstName}</p>
      <p>Last name: {values.lastName}</p>
      <p>Company: {values.company}</p>
      <p>Title: {values.title}</p>
      <p>Age: {values.age}</p>

      <Button 
      buttonType="submit" 
      label="Submit" 
      onButtonResponse={onButtonResponse} />
    </div>
  )
}

export default Summary
