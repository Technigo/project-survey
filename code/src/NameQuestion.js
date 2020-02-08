import React from 'react'

export const NameQuestion = ({ name, handleSetName }) => {
  return (
    <label>Tell me your name?
      <input
        type="text"
        defaultValue={name}
        onChange={(event) => handleSetName(event.target.value)}
        placeholder="name" />
    </label>
  )
}