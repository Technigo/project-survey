import React from "react"

export const Summary = ({ name, respond, food, song, drink }) => {
  return (
    <section className="summary">
      <img src="../Confetti.svg" alt="Confetti" className="confetti"></img>
          <h2>Men {respond ? "JA" : "nej"}, {name}! Det är klart du ska komma.</h2>
          <p>Vi bäddar din säng och fixar {food} till maten. Det kommer finnas gott om {drink} och vi sätter {song} på repeat.</p>
    </section>
  )
}