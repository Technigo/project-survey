import React from 'react'

const Overview = ({ nameInput, surnameInput, ageInput, favoriteInput, ratingInput }) => {
    return (
        <section>
            <h2>Submitted answers:</h2>
            <p>Name: {nameInput}</p>
            <p>Surname: {surnameInput}</p>
            <p>Age: {ageInput}</p>
            <p>Favorite: {favoriteInput}</p>
            <p>Rating: {ratingInput}</p>
        </section>
    )
}

export default Overview