import React from 'react'

export const Summary = (item) => {
  return (
    <section>
      <h1>...And here's the summary for {item.name}.</h1>
      <p>You're from {item.location}.</p>

    </section>
  )
}