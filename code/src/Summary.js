import React from "react"

export const Summary = ({ name, respond, food, song, drink }) => {
  return (
    <section>
      <h2>Välkommen {name}</h2>
      <h3>Tack för att du svarade {respond ? "ja" : "nej"}</h3>
      <h3>Du äter {food}</h3>
      <h3>Jag vill dricka {drink}</h3>
      <h3>Vi lägger till {song} på listan</h3>
    </section>

  )
}