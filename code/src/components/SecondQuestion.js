import React, { useState } from 'react'
import './secondQuestion.css'

export const SecondQuestion = ({ answer, setAnswer }) => {
    // const [answer, setAnswer] = useState("")
    return (
        <section className="second-question" id="answer">
            <h1 tabIndex="0">What did, or could have made your day better?</h1>
            <h2 tabIndex="0">Every little moment counts!</h2>
            {/* <form onSubmit={event => event.preventDefault()} /> */}
            <label tabIndex="0">
                <input
                    className="better-day"
                    pattern="^[a-zA-Z ]*$"
                    id="answer"
                    type="text"
                    value={answer}
                    onChange={event => setAnswer(event.target.value)}
                    minLength="10"
                    placeholder="Be kind to yourself"
                    required

                />
            </label>
            <button><a href="#hours">continue</a></button>
        </section>

    )
}