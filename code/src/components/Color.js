import React from 'react'

export const Color = ({ color, setColor }) => {
  const handleColor = (event) => {
    setColor(event.target.value)
  }
  return (
    <form className="color-form" onSubmit={(event) => event.preventDefault()} required>
      What is your favorite color?
      <input type="text" required value={color} onChange={handleColor} />
    </form>
  )
}