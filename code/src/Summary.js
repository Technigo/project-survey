import React from "react"

export const Summary = ({ name, respond }) => {
  return (
    <section>
      <h2>Välkommen {name}</h2>
      <h3>Tack för att du svarade {respond ? "ja" : "nej"}</h3>
    </section>

  )
}