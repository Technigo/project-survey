import React, { useState } from 'react'
import Select from 'Select'
import Text from './Text'
import Radio from './Radio'
import Summary from './Summary'
import './Inputs.css'


export const Input = () => {
    const [name, setName] = useState('') // text 
    const [teletubbies, setTeletubbies] = useState('') // select
    const [questionGroup, setQuestionGroup] = useState("") // radiobuttons
    const [showSummary, setShowSummary] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true)
    }

        return (
            <main className="form-wrapper">
                <h1> Which is your favourite color based on comic characters? </h1>
                {!showSummary ? (
                    <form onSubmit={handleSubmit}>
                        <Text
                            id="test"
                            question="here is my question"
                            setText={setName}
                            value={name}
                        />
                        < Select setTeletubbies={setTeletubbies} teletubbies={teletubbies} />
                        < Radio setQuestionGroup={setQuestionGroup} questionGroup={questionGroup} />
                        <button disabled={!name || !teletubbies || !questionGroup} type="submit"> I'M DONE </button>
                    </form>
                ):
                showSummary && (
                    <Summary
                        text={name}
                        select={teletubbies}
                        radio={questionGroup}
                    />
                )}
            </main>
        )
    }