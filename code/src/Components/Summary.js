import React from 'react'


export const Summary = ({ name, radioInput, food }) => {
  return (
    <section>
        <h1>Thank you sweet {name}! </h1>
        <p>I love {food} too and soo great that you are a/an {radioInput}</p>
        <p>Hope you enjoyed this teeny-tiny survey of sweets, but there is one more thing: you should find out whicjh sweet is coming from...delicious information!</p>
    </section>
  )
}
