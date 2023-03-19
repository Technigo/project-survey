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
        <label htmlFor="name">
          <input type="text" name="name" value={name} onChange={handleName} />
        </label>
      </form>
    </>
  )
}