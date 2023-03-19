import React from 'react'
import '../index.css';

export const Name = ({ name, setName }) => {
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label className="label" htmlFor="name">Hi, what is your name?
        <input type="text" name="name" value={name} onChange={handleName} />
      </label>
    </form>
  )
}