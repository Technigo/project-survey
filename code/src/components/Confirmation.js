import React from 'react'
import Button from './Button'

const Confirmation = () => {
  return (
    <>
      <Button value="Do it again" buttonType="next" onButtonResponse={onButtonResponse} />

    </>
  )
}

export default Confirmation
