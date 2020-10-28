import React from 'react'


export const Summary = (props) => {
  const { name, radioInput, food } = props
  return (
    <section>
        <h1>Thank you sweet {name}! </h1>
        <p>I love {food} too and soo great that you are a/an {radioInput} person!</p>
        <p>Hope you enjoyed this teeny-tiny survey of sweets, but there is one more thing: you should find out which sweet is coming from...delicious information!</p>
    </section>
  )
}
