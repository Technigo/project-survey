import React, { useState } from 'react'
import { Summary } from './components/Summary'


const songs = [
    'Happy birthday',
    'Itsy bitsy spider',
    'Row row row your boat',
]


export const App = () => {
    const [whichSong, setWhichSong] = useState("")
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [showSummary, setShowSummary] = useState(false)


    const handleSubmit = event => {
        event.preventDefault()
        setShowSummary(true)

    }

    return (
        <div>
            <header>
                <h1>Washing them hands</h1>
            </header>

            {!showSummary &&
                <form onSubmit={handleSubmit}>
                    <div className="question-1-container">
                        <h2>Which of these songs do you sing while washing your hands?</h2>
                        {songs.map(song => (
                            <label key={song}>
                                <input
                                    type="radio"
                                    value={song}
                                    onChange={event => setWhichSong(event.target.value)}
                                    checked={whichSong === song}
                                    required
                                />
                                {song}
                            </label>
                        ))}
                    </div>

                    <div className="question-2-container">
                        <label>
                            <h2>What is your favorite soap?</h2>
                            <input
                                type="text"
                                onChange={event => setName(event.target.value)}
                                value={name}
                                placeholder="name of soap"
                                required
                            />
                        </label>
                    </div>

                    <div className="question-3-container">
                        <label>
                            <h2>What type of soap do your prefer?</h2>
                            <select
                                onChange={event => setType(event.target.value)}
                                value={type}
                                required
                            >
                                <option value="">Select type</option>
                                <option value="Solid">Solid</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Foam">Foam</option>

                            </select>
                        </label>
                    </div>

                    <button type="submit">Push!</button>

                </form >}

            {showSummary &&
                <Summary whichSong={whichSong} name={name} type={type} />}

        </div >
    )

}