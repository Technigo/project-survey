import React from 'react'

export const Fairyname = ({ fairyName, setFairyName }) => {
  const handleFairyName = (event) => {
    setFairyName(event.target.value)
  }
  return (
    <form className="fairy-name-from" onSubmit={(event) => event.preventDefault()} required>
      Come up with a fairytale name
      <input aria-label="fairytale name input" type="text" required value={fairyName} onChange={handleFairyName} />
    </form>
  )
}