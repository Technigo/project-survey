import React, { useState } from 'react'
import './secondQuestion.css'

export const SecondQuestion = () => {
    const [answer, setAnswer] = useState("")
    return (
        <section className="second-question" id="second">
            <h1>What did, or could have made your day better?</h1>
            <h2>Every little thing counts!</h2>
            <label tabIndex="0">
                <input
                    className="better-day"
                    id="answer"
                    type="text"
                    placeholder="Be kind to yourself"
                    minLength="10"
                    onChange={event => setAnswer(event.target.value)}
                    value={answer}
                    required
                />
            </label>
            <button><a href="#third">continue</a></button>
        </section>
    )
}