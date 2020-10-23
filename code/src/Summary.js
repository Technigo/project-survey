import React from 'react'

export const Summary = ( {name, descriptions, gift, userName} ) => {
    
    return (
        <section>
            <h2>Hi {name}</h2>
            <p>You are {descriptions.join(', ')} and if it wasn't for corona I would give you {gift}.</p>
            <p>Sending love from {userName}</p>
        </section>
    
    )
}