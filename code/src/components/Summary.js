import React from 'react'
import Button from './Button'

const Summary = ({ values, onButtonResponse }) => {
  return (
    <div>
      <h1>Does this look ok?</h1>
      <p>First name: {values.name}</p>
      <p>Company: {values.company}</p>
      <p>Title: {values.title}</p>
      <p>Age: {values.age}</p>
      <Button 
      buttonType="previous" 
      label="Previous" 
      onButtonResponse={onButtonResponse} />

      <Button 
      buttonType="submit" 
      label="Submit" 
      onButtonResponse={onButtonResponse} />
    </div>
  )
}

export default Summary
