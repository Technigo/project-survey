import React from 'react'

export const Summary = ({food, icecream, drink}) => {
    return (
    <section>
        <h3>Hello you, thank you for participating! <br></br>
        I see you like {food}, {icecream} and {drink}. <br></br>
        Sounds delicious!
        </h3>
    </section>
    )
}