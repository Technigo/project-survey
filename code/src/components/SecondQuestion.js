import React, { useState } from 'react'
import './secondQuestion.css'

export const SecondQuestion = () => {
    const [answer, setAnswer] = useState("")
    return (

        <section className="second-question" id="answer">
            <h1 tabIndex="0">What did, or could have made your day better?</h1>
            <h2 tabIndex="0">Every little moment counts!</h2>
            {/* <form onSubmit ={event => event.preventDefault()}/>  */}
            <label htmlFor="answer" tabIndex="0">
                <input
                    className="better-day"
                    id="answer"
                    type="text"
                    value={answer}
                    onChange={event => setAnswer(event.target.value)}
                    required minLength="10"
                    placeholder="Be kind to yourself"

                />
            </label>
            <button><a href="#hours">continue</a></button>
        </section>

    )
}