import React, { useState } from 'react'

export const Name = () => {
  const [name, setName]=useState("")
  const handleSubmit = (event) =>{
    event.preventDefault()
  }
  return (
    <form>
      <h1>What nickname would you like to go by? {name}</h1>
      <input
        type = "text"
        onChange = {event => setName(event.target.value)}
        value = {name}
      >
      </input>
    </form>

  )
}