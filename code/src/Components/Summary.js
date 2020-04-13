import React from 'react'
import './summary.css'

export const Summary = (props) => {
  const { name, codingLevel, destination } = props

  if (destination === "Åre") {
    return (
      <section>
        <p>Your name is: {name}</p>
        <p>Your coding level is: {codingLevel}</p>
        <p>And your choice of destination is: {destination}</p>
        <img src="are.jpg" alt="hiking_in_åre" />
        <h4>Thank you for signing up!</h4>
      </section>
    )

  } else if (destination === "Abisko") {
    return (
      <section>
        <p>Your name is: {name}</p>
        <p>Your coding level is: {codingLevel}</p>
        <p>And your choice of destination is: {destination}</p>
        <img src="abisko.jpg" alt="hike_in_abisko" />
        <h4>Thank you for signing up!</h4>
      </section>
    )

  } else {
    return (
      <section>
        <p>Your name is: {name}</p>
        <p>Your coding level is: {codingLevel}</p>
        <p>And your choice of destination is: {destination}</p>
        <img src="funasdalen.jpg" alt="funäsdalen" />
        <h4>Thank you for signing up!</h4>
      </section>
    )
  }
}

