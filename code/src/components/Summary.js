import React from 'react'
import Button from './Button'

const Summary = ({ values, onButtonResponse }) => {
  return (
    <div>
      <h1>Does this look ok?</h1>
      <p>{values.name}</p>
      <p>{values.company}</p>
      <p>{values.age}</p>
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
