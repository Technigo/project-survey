import React from 'react'
import '../index.css';

export const Name = ({ name, setName }) => {
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <>
      <p>Hi, what is your name?</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" required value={name} onChange={handleName} />
      </form>
    </>
  )
}