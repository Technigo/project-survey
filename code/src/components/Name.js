import React, { useState } from 'react'

export const Name = ({ name, setName }) => {


  return (
    <label>
      <h1>What nickname would you like to go by? {name}</h1>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      >
      </input>
    </label>


  )
}