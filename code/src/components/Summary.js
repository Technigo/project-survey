import React from 'react'

const Summary = ({ nameInput, value, whatTeam, watchedStatus }) => {

    return (
        <section className="end-screen">
            <h2>Your Buffy profile:</h2>
            <div className="stats-container">
            <p>Rating: {value}</p>

            <p>Name: {nameInput}</p>

            <p> Shipping: {whatTeam === 'Angel' ? 'Team Angel' : 'Team Spike'}</p>


            <p>Seen it: {watchedStatus}</p>
            </div>

            <div><button onClick={window.print}>Print your results!</button></div>
        </section>
    )
}



export default Summary



// style={{background: whatTeam === 'Angel' ? 'blue' : 'red' }}