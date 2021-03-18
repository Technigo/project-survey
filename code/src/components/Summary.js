// import React, { useState } from 'react'
import React from 'react'
import Form from './Form'

const Summary = ({ name, food, flower }) => {
    return (
        <>
            <div>
                <h1>Hurra, en summary</h1>
                <h3>Your answers: Your name: {name}. You're favorite food: {food} Your favorite flower is {flower}.</h3>
            </div>
        </>
    )

}

export default Summary;