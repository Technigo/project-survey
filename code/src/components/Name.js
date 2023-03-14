import React from 'react'

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <section className="inputName">
      <h2>Hello what´s your name?</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="submit" value="Submit" />

    </section>
  )
}