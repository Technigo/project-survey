import React from 'react'

export const NameQuestion = (props) => {
  const { name, setName } = props
  return (
    <label>
      <h1>Hello, {name}!</h1>
            What's your name?
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      />
    </label>
  )
}