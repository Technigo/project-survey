import React from 'react'
import Button from './Button'

const Confirmation = ({ onButtonResponse }) => {
  return (
    <>
      <h1>All done!</h1>
      <Button 
        label="Do it again" 
        buttonValue="reset" 
        onButtonResponse={onButtonResponse} 
      />
    </>
  )
}

export default Confirmation
