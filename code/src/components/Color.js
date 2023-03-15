import React from 'react'

export const Color = ({ color, setColor }) => {
  const handleColor = (event) => {
    setColor(event.target.value)
  }
  return (
    <>
      <p>
        What is your favorite color?
      </p>
      <input type="text" required value={color} onChange={handleColor} />
    </>
  )
}