import React, { useState } from 'react'

export const Input = () => {
  const [name, setName] = useState("")
  return (
    <form>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      />
    </form>
  )
}