import React, { useState } from 'react'

export const FavoriteSoap = () => {
  const [name, setName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (

    <form onSubmit={handleSubmit}>
      <label>
        <h2>What is your favorite soap?</h2>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          placeholder="name of soap"
        />
      </label>
    </form>
  )
}