import React, { useState } from 'react'

export const NameInput = props => {
  const { name, setName } = props

  return (
    <label>
      Whats your name?
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </label>
  )
}