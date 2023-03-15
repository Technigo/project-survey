import React from 'react'

export const Fairyname = ({ fairyName, setFairyName }) => {
  const handleFairyName = (event) => {
    setFairyName(event.target.value)
  }
  return (
    <>
      <p>Come up with a fairytale name</p>
      <input type="text" required value={fairyName} onChange={handleFairyName} />
    </>
  )
}