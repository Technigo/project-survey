import React from 'react'

const Overview = ({nameInput, locationInput, animalInput}) => {

    return (
        <section>
        <h2> The overview</h2>
        <p> Your name: {nameInput}</p>
        <p> Your location: {locationInput}</p>
        <p> Your favourite animal: {animalInput}</p>
      </section>
    )
}
export default Overview