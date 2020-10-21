import React, { useState } from 'react'
import './thirdQuestion.css'

export const ThirdQuestion = () => {
    const [sleep, setSleep] = useState("")

    return (
        <div className="third-question">
            <form>
                <h1>How many hours of sleep have you had today?</h1>
                <h2>It is okay to feel you need a few hours more.</h2>
                <div className="radio-buttons">
                    <label>
                        <input
                            type="radio"
                            value="0-5 hours"
                            className="radio-button"
                            onChange={event => setSleep(event.target.value)}
                            checked={sleep === "0-5 hours"}
                        />
                        <p>0-5 hours</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="5-8 hours"
                            className="radio-button"
                            onChange={event => setSleep(event.target.value)}
                            checked={sleep === "5-8 hours"}
                        />
                        <p>5-8 hours</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="more than 8 hours"
                            className="radio-button"
                            onChange={event => setSleep(event.target.value)}
                            checked={sleep === "more than 8 hours"}
                        />
                        <p> more than 8 hours</p>
                    </label>
                    {/* {sleep === "0-5 hours" && <p>Remember that proper sleep rejuvenates the soul.</p>} */}
                </div>
                <button>continue</button>
            </form>
        </div>
    )
}