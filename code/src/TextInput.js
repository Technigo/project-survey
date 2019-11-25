import React, { useState } from 'react'

export const TextInput = () => {
    const [name, setName] = useState("");

  return (
    <div className="textInput">
      <h2>{name}</h2>
      <input 
      type="text"
      onChange = {event => setName(event.target.value)}
      value = {name}
      />
      </div>
  )
}
