import React from 'react'

export const Results = ({ name, results, setResult }) => {
  return (
    <div>
      <section className="inputName">
        <h2>{name} your favourite animal is {result}</h2>
        <input type="text" value={results} onChange={handleNameChange} />
        <input type="submit" value="Submit" />

      </section>
    </div>
  )
}