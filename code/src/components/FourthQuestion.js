import React, { useState } from 'react'
import './fourthQuestion.css'

export const FourthQuestion = () => {
    const [activity, setActivity] = useState("")

    return (
        <section className="fourth-question" id="activity">
            <h1>Choose one thing from you'll do for yourself today</h1>
            <h2>Keep hydrated and acknowledge your thoughts and feelings</h2>
            <select
                onChange={event => setActivity(event.target.value)}
                value={activity}
                required
            >
                <option value="♡" disabled>♡</option>
                <option value="try out a nice and relaxing meditatation">Meditate</option>
                <option value="drink more water, have a glass right now!">Drink more water</option>
                <option value="go on a long walk, maybe with a loved one?">Go on a long walk</option>
                <option value="journal your thoughts and feelings on a regular basis">Journal your thoughts and feelings</option>
                <option value="enjoy a cup of tea">Enjoy a cup of tea</option>
                <option value="take that warm and cozy bath">Take a warm bath</option>
            </select>
            <button><a href="#summary">Do this for you</a></button>

            {/* // disabled={answer === "" || hour === "" || activity === ""} */}

        </section>
    )
}