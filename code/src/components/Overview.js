import React from 'react'

const Overview = ({ nameInput, surnameInput, travelPersonInput, travelDestination}) => {
    return (
        <>
        <section>
        <h2>My values from form :</h2>
        <p>Name : {nameInput}</p>
        <p>Surname : {surnameInput}</p>
        <p>Your are {travelPersonInput === 'travel' ? 'totally a travel' : 'not at all a travel'} person</p>
        <p>Your next travel destination is {travelDestination}</p>
        </section>
        </>
    )
}

export default Overview