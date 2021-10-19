import React from 'react'

const Overview = ({nameInput, locationInput, animalInput, colourInput, aeroplaneInput}) => {

    return (
        <section>
        <h2> The overview</h2>
        <p> Your name: {nameInput}</p>
        <p> Your location: {locationInput}</p>
        <p> Your favourite chosen animal: {animalInput}</p>
        <p> Your favourite colour: {colourInput}</p>
        <p> Can you make an aeroplane out of paper?: {aeroplaneInput}</p>
      </section>
    )
}
export default Overview