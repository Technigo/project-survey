import React from 'react'

export const Name = ({ name, setName }) => {
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <form className="name-form" onSubmit={(event) => event.preventDefault()} required>
      Finally, what is your name?
      <input type="text" required value={name} onChange={handleName} />
    </form>
  )
}