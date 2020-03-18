import React, { useState } from 'react'


export const App = () => {
    const [name, setName] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div className="firstSurvey">
            <header>
                <h1>Washing them hands</h1>
            </header>

            <form>
                <label>
                    How many times do you wash?
                <input
                        type="radio"
                        onChange={}
                        value={}
                    />
                </label>
            </form>

            <form onSubmit={handleSubmit}>
                <label>
                    Your favorite soap?
            <input
                        type="text"
                        onChange={event => setName(event.target.value)}
                        value={name}
                    />
                </label>
            </form>
        </div>

    )


}