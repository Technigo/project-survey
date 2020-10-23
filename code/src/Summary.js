import React from 'react'

export const Summary = (name, discription, gift, userName) => {
    console.log(discription)
    return (
        <section>
            <h2>Hi {name}</h2>
            <p>You are {discription.join(', ')} and if it wasn't for corona I would give you {gift}</p>
        </section>
    
    )
}