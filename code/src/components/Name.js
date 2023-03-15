import React from 'react'

export const Name = ({ name, setName }) => {
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <>
      <p>
        Finally, what is your name?
      </p>
      <input type="text" required value={name} onChange={handleName} />
    </>
  )
}