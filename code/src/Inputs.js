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
    const [question, setQuestion] = useState(1);

    const nextQuestion = () => setQuestion(question + 1);

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
                    {question === 1 && (
                        <section className="question-wrapper">
                            <Text
                                id="power-ranger-text"
                                setText={setName}
                                value={name}
                                question="Coolest Power Ranger character?"
                            />
                            <button className="next-question"
                                aria-label="Submitt-button"
                                disabled={!name}
                                type="button"
                                onClick={nextQuestion}> Next Question </button>
                        </section>
                    )}
                    {question === 2 && (
                        <section className="question-wrapper">
                            < Teletub setTeletubbies={setTeletubbies} teletubbies={teletubbies}
                                question="Which is your favorite teletubbies?" />
                            <button className="next-question"
                                aria-label="Submitt-button"
                                disabled={!teletubbies}
                                onClick={nextQuestion}
                                type="button"> Next Question </button>
                        </section>
                    )}
                    {question === 3 && (
                        <section className="question-wrapper">
                            < SailorMoon setSailorMoon={setSailorMoon} sailorMoon={sailorMoon}
                                question="Sailor Moon character?" />
                            <button className="next-question"
                                aria-label="Submitt-button"
                                disabled={!sailorMoon}
                                onClick={nextQuestion}
                                type="button"> Next Question </button>
                        </section>
                    )}
                    {question === 4 && (
                        <section className="question-wrapper">
                            < Turtles setTurtles={setTurtles} turtle={turtle} />
                            <button aria-label="Submitt-button" disabled={!name || !teletubbies || !sailorMoon || !turtle} type="submit"> I'M DONE </button>
                        </section>
                    )}
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