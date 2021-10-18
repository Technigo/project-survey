import React from "react"

const Overview = ({ nameInput, quantity, plantFeature }) => {
    return (
        <section>
            <h2>My values from form:</h2>
            <p>Name: {nameInput}</p>
            <p>Amount of plants: {quantity}</p>
            <p>For you the most important in a plant is {plantFeature}</p>
        </section>
    )
}

export default Overview