import React from 'react'

const Input = ({ name, onNameChange }) => {
  return (
    <>
    Amount of hours listening to music monthly:

      <input
        autoComplete="off"
        placeholder="Choose a number"
        className="name-input"
        id="name"
        type="number"
        value={name}
        onChange={onNameChange} />
    </>
  )
}

export default Input
