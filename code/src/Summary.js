import React from 'react'

export const Summary = ( {name, descriptions, gift, cheesyCaption, userName} ) => {
    
    return (
        <section className="summary section">
            <h2>Hi {name}</h2>
            <p>You are {descriptions.join(', ')} and if it wasn't for corona I would give you {gift}.</p>
            <p>{cheesyCaption}</p>
            <p>Sending love from {userName}</p>
        </section>
    
    )
}