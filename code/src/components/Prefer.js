import React from 'react'

export const Prefer = ({ prefer, setPrefer }) => {
  const handleNameChange = (event) => {
    setPrefer(event.target.value);
  }
  return (
    <div>
      <section className="inputName">
        <h2>Hello what´s your name?</h2>
        <input type="text" value={prefer} onChange={handleNameChange} />
        <input type="submit" value="Submit" />

      </section>
    </div>
  )
}