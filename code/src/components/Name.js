import React from 'react'

export const Name = ({ name, setName }) => {
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <>
      <p>First of all, what is your name?</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" value={name} onChange={handleName} />
      </form>
    </>
  )
}