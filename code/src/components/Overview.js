import React from 'react'

const Overview = ({nameInput, locationInput}) => {

    return (
        <section>
        <h2> The overview</h2>
        <p> Your name: {nameInput}</p>
        <p> Your location: {locationInput}</p>
      </section>
    )
}
export default Overview