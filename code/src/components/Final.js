import React from 'react';

export const Final = ({ final, setFinal }) => {
  const handleFinalChange = (event) => {
    setFinal(event.target.value)
  }
  return (
    <div className="finalForm">
      <p>Thank you for participating in my performance review! Do you have any final comments?</p>
      <textarea
        value={final}
        onChange={handleFinalChange}
        maxLength="500"
        rows="4"
        cols="30"
        className="finalBox" />
    </div>
  )
}