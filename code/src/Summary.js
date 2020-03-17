import React from "react";
import "./summary.css"

export const Summary = ({ name, vacation, spiritAnimal, isEighteen }) => (
  <section className="summary">
    <h1>Happy to see you join us {name}!</h1>
    {isEighteen && <p>Hope to see you {vacation} with a {spiritAnimal} soon!</p>}
  </section>
)