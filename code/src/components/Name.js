import React from 'react'

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
    event.preventDefault()
  }
  return (
    <>
      <h3>What is your name?</h3>
      <input type="text" value={name} onChange={handleNameChange} />
    </>

  )
}

