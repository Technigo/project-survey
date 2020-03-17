import React from 'react'

export const Summary = ({ name, nut, shape, allergy }) => {

  return (
    <section className="summary">
      <h2>
        Hi {name.charAt(0).toUpperCase() + name.slice(1)}! Your favorite nut is the {nut.toLowerCase()} and you prefer it {shape.toLowerCase()}.
        {allergy ? <> Sorry to hear you're allergic though ¯\_(ツ)_/¯</> : <> Happy to hear you can eat them!</>}
      </h2>
    </section>
  )
}