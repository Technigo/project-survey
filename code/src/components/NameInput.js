import React, { useState } from 'react'

export const NameInput = () => {
  const [name, setName] = useState('')

  return (
    <form>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <h3>My name is: {name}</h3>
    </form>
  )
}