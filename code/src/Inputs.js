import React, { useState } from 'react'
import Text from './Text'
import Teletub from 'Teletub'
import SailorMoon from './SailorMoon'
import Turtles from './Turtles'
import Summary from './Summary'
import './Inputs.css'


export const Input = () => {
    const [name, setName] = useState('') // text 
    const [teletubbies, setTeletubbies] = useState('') // select
    const [sailorMoon, setSailorMoon] = useState('') // radiobuttons
    const [turtle, setTurtles] = useState('') // select
    const [showSummary, setShowSummary] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true)
    }

    return (
        <main className="form-wrapper">
            <div className="h1-wrapper">
                <h1 tabIndex="0"> Which is your favourite color based on comic characters? </h1>
            </div>
            {!showSummary ? (
                <form onSubmit={handleSubmit}>
                    <Text
                        id="power-ranger-text"
                        setText={setName}
                        value={name}
                    />
                    < Teletub setTeletubbies={setTeletubbies} teletubbies={teletubbies} />
                    < SailorMoon setSailorMoon={setSailorMoon} sailorMoon={sailorMoon} />
                    < Turtles setTurtles={setTurtles} turtle={turtle} />
                    <button aria-label="Submitt-button" disabled={!name || !teletubbies || !sailorMoon} type="submit"> I'M DONE </button>
                </form>
            ) :
                showSummary && (
                    <Summary
                        text={name}
                        teletubbies={teletubbies}
                        sailorMoon={sailorMoon}
                        turtles={turtle}
                    />
                )}
        </main>
    )
}