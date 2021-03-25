import React from 'react'
import Button from './Button'

const Summary = ({ values, onButtonResponse }) => {
  return (
    <div>
      <h1>Does this look ok?</h1>

      {Object.keys(values).map((key, index) => {
        return (
          <p key={index}><b>{key}</b>: {values[key]}</p>
        )
      })}

      <Button 
        buttonValue="previous" 
        label="Previous" 
        onButtonResponse={onButtonResponse} 
      />

      <Button 
        buttonValue="submit" 
        label="Submit" 
        onButtonResponse={onButtonResponse} 
      />
    </div>
  )
}

export default Summary
