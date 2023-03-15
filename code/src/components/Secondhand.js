import React from 'react';

export const Secondhand = ({ secondHand, setSecondHand }) => {
  const handleSecondHandChange = (event) => {
    setSecondHand(event.target.value)
  }

  return (
    <>
      <h1>Please share your best site for finding sneakers secondhand:{secondHand}</h1>
      <input
        type="text"
        onChange={handleSecondHandChange} />
    </>
  )
}
