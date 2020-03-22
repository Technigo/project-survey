import React from "react"


export const Summary = props => {
  const { name } = props
  const { person } = props
  const { pet } = props

  return (
    <section>
      <h1>Hey {name}!</h1>
      <h3>You are {person} and your favorite pet is {pet}</h3>
    </section>
  );
};
