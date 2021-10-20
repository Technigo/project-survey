import React from 'react'

const Overview = ({ nameInput, surnameInput, ageInput, favoriteInput, ratingInput, sliderInput }) => {
    return (
        <section>
            <h2>Submitted answers:</h2>
            <p>Name: {nameInput}</p>
            <p>Surname: {surnameInput}</p>
            <p>Age: {ageInput}</p>
            <p>Favorite: {favoriteInput}</p>
            <p>Rating: {ratingInput}</p>
            <p>Slide factor: {sliderInput}%</p>

            <button onClick={() => window.location.reload(false)}>Restart</button>
        </section>
    )
}

export default Overview