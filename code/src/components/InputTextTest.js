import React, { useState } from 'react'

export const InputTextTest = () => {
  const [lastName, setLastName] = useState('');
  return (
    <label>
      <h2>What is your last name?</h2>
      <input
        type='text'
        onchange={event => setLastName(event.target.value)}
        value={lastName}
      />
    </label>
  )
}