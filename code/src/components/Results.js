import React from 'react'

export const Results = ({ name, results }) => {
  return (
    <div>
      <section className="inputName">
        <h2>{name} your favourite animal is {results}</h2>

      </section>
    </div>
  )
}