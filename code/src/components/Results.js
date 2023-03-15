import React from 'react'

export const Results = ({ name, result, setResults }) => {
  return (
    <div>
      <section className="inputName">
        <h2>{name}, your favourite animal is {result}</h2>
      </section>
    </div>
  )
}