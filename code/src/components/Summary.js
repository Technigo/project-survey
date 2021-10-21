import React from 'react'

const Summary = ({ name, size, pet, character }) => {
    return (
        <>
            <section>
                <h1 tabIndex="0">So there we go!</h1>
                <h2 tabIndex="0">Your ideal pet friend is a {size}, {character} {pet} named {name}. You're welcome!</h2>
            </section>
        </>
    )

}

export default Summary;