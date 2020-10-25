import React, { useState } from 'react'
import './thirdQuestion.css'


export const ThirdQuestion = () => {
    const [hour, setHour] = useState("")
    const optionsList = ["0-5 hours", "5-8 hours", "> 8 hours"]
    return (
        <section className="third-question" id="hours">
            <h1 tabIndex="0">How many hours of sleep have you had today?</h1>
            <h2 tabIndex="0">It is okay to feel you need more rest.</h2>
            <div className="radio-buttons">
                {optionsList.map((group) => (
                    <label tabIndex="0" key={group}>
                        <input
                            name="hours"
                            type="radio"
                            value={group}
                            className="radio-button"
                            onChange={event => setHour(event.target.value)}
                            checked={hour === group}
                            required
                        />
                        {group}
                    </label>
                ))}
            </div>
            <button><a href="#activity">continue</a></button>
        </section>
    )
}


