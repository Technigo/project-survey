// import React, { useState } from 'react'
import React from 'react'
import Form from './Form'

const Summary = (prop) => {
    return (
        <>
            <div>
                <h1>Hurra, en summary</h1>
                <h3>Your answers: Your name: {prop.name}. You're favorite food: {prop.food}.</h3>
            </div>
        </>
    )

}

export default Summary;