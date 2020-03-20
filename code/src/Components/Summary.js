import React from 'react'
import './summary.css'

export const Summary = (props) => {
    const { name, codingLevel, destination } = props
    return (
        <section>
            <p>Your name is: {name}</p>
            <p>Your coding level is: {codingLevel}</p>
            <p>And your choice of destination is: {destination}</p>
            <h4>Thank you for signing up!</h4>
            <img src="are.jpg" alt="hiking_in_åre" />
        </section>
    )
}
