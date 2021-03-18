import React from 'react'
import Button from './Button'

const Summary = ({ values, onButtonResponse }) => {
  return (
    <div>
      <h1>Does this look ok?</h1>
      <p>First name: {values.name}</p>
      <p>Company: {values.company}</p>
      <p>Age: {values.age}</p>
      <Button 
      buttonValue="previous" 
      label="Previous" 
      onButtonResponse={onButtonResponse} />

      <Button 
      buttonValue="submit" 
      label="Submit" 
      onButtonResponse={onButtonResponse} />
    </div>
  )
}

export default Summary
