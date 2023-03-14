import React from 'react'

export const Results = ({ results, setResult }) => {
  const handleNameChange = (event) => {
    setResult(event.target.value);
  }
  return (
    <div>
      <section className="inputName">
        <h2>Hello what´s your name?</h2>
        <input type="text" value={results} onChange={handleNameChange} />
        <input type="submit" value="Submit" />

      </section>
    </div>
  )
}