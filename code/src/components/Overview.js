import React from 'react'

const Overview = ({ nameInput, lastnameInput, ageInput, favoriteInput, ratingInput, sliderInput }) => {
    return (
        <section>
            <h2>Submitted answers:</h2>
            <p>Name: {nameInput}</p>
            <p>Last name: {lastnameInput}</p>
            <p>Age: {ageInput}</p>
            <p>Favorite: {favoriteInput}</p>
            <p>Rating: {ratingInput}</p>
            <p>Slide factor: {sliderInput}%</p>

            <img src="./assets/q7.svg" alt="question-step-7"></img>

            <button onClick={() => window.location.reload(false)}>Restart</button>
        </section>
    )
}

export default Overview