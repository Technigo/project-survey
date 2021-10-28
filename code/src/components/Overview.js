import React from 'react'

const Overview = ({ nameInput, samuelInput, favInput }) => {
    return (
        <section>
            <h2>Here's what we got for you:</h2>
            <p>You chose to go by the handle of <strong>{nameInput}</strong>,
            that Samuel L Jackson quote was from <strong>{samuelInput}</strong> and
            your favourite type of cinematic experience is a <strong>{favInput}</strong>!</p>
        </section>
    )
}

export default Overview