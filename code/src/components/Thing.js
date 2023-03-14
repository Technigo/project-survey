import React from 'react'

export const Thing = ({ thing, setThing }) => {
  const handleNameChange = (event) => {
    setThing(event.target.value);
  }
  return (
    <div>
      <section className="inputName">
        <h2>Hello what´s your name?</h2>
        <input type="text" value={thing} onChange={handleNameChange} />
        <input type="submit" value="Submit" />

      </section>
    </div>
  )
}