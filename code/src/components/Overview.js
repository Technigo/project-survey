import React from 'react'

const Overview = ({ nameInput, samuelInput, favInput }) => {
    return (
        <section>
            <h2>Here's what we've got for you:</h2><br />
            <p>You chose to go by the handle of <strong>{nameInput}</strong>. Cute.<br />
            That Samuel L Jackson quote was from <strong>{samuelInput}</strong>, and<br />
            your favourite type of cinematic experience is a <strong>{favInput}</strong>!</p><br />
            <p>If you want to go again, just refresh the page.</p>
        </section>
    )
}

export default Overview