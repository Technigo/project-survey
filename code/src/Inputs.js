import React, { useState } from 'react'
import Select from 'Select'
import Text from './Text'
import Radio from './Radio'
import Summary from './Summary'


export const Input = () => {
    const [name, setName] = useState('') // text 
    const [question, setQuestion] = useState('') // select
    const [questionGroup, setQuestionGroup] = useState("") // radiobuttons
    const [showSummary, setShowSummary] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true)
    }

        return (
            <main>
                <h1> Title for my form</h1>
                {!showSummary ? (
                    <form onSubmit={handleSubmit}>
                        <Text
                            id="test"
                            question="here is my question"
                            setText={setName}
                            value={name}
                        />
                        < Select setQuestion={setQuestion} question={question} />
                        < Radio setQuestionGroup={setQuestionGroup} questionGroup={questionGroup} />
                        <button disabled={!name || !question || !questionGroup} type="submit"> I'M DONE </button>
                    </form>
                ):
                showSummary && (
                    <Summary
                        text={name}
                        select={question}
                        radio={questionGroup}
                    />
                )}
            </main>
        )
    }