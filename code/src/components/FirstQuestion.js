import React from 'react'
import { Range } from './Range'
import './firstQuestion.css'

export const FirstQuestion = () => {

    return (
        <section className="first-question" id="first">
            <h1>On a scale from 1 to 10, how are you feeling today?</h1>
            <h2>1 being the lowest, 10 being the highest</h2>
            <Range />
            <button onClick><a href="#answer">continue</a></button>
        </section>
    )
}