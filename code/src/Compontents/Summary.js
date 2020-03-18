import React from 'react'


export const Summary = ({ name, tech, radioInput }) => {
  return (
    <section>
      <h1>Thank you {name}! <span aria-label="Party symbol" role="img">🎉</span></h1>
      <p>We agree, {tech} is amazing!</p>
      <p>So you would {radioInput} recommend your friends to start coding!</p>
      <p>Could not agree more, you are an <span className="bold">awesome developer</span> and you are doing great!</p>
    </section>
  )
}