import React from 'react'

const Summary = ({ nameInput, counter, whatTeam, watchedStatus }) => {

    return (
        <section>
            <h2>Your results:</h2>

            <p>Count: {counter}</p>

            <p>Name: {nameInput}</p>

            <p>Shipping: {whatTeam === 'Angel' ? 'Team Angel' : 'go for Spike'}</p>


            <p>Seen it: {watchedStatus}</p>

        </section>
    )
}



export default Summary