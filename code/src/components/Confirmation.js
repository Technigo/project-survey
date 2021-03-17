import React from 'react'
import Button from './Button'

const Confirmation = ({ onButtonResponse }) => {
  return (
    <>
      <h1>All done!</h1>
      <Button label="Do it again" 
      label="Reset" 
      buttonType="reset" 
      onButtonResponse={onButtonResponse} />

    </>
  )
}

export default Confirmation
