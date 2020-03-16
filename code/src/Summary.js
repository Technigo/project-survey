import React from "react";
import "./summary.css"

export const Summary = props => {
  const { name, vacation, spiritAnimal } = props
  return (
    <section>
      <h1>Happy to see you join {name}!</h1>
      <p>Hope to see you {vacation} with a {spiritAnimal} soon!</p>
    </section>
  );
};