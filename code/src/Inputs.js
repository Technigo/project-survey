import React, { useState } from 'react'
import Select from 'Select'
import Text from './Text'
import Radio from './Radio'


export const Input = () => {
    const [name, setName] = useState('') // text 
    const [question, setQuestion] = useState('') // select
    const [questionGroup, setQuestionGroup] = useState() // radiobuttons
    return (
        <section>
        <form>
            <Text 
            id="test"
            question="here is my question"
            setText={setName}
            value={name}
            />
            < Select setQuestion={setQuestion} question={question}/>
            < Radio setQuestionGroup={setQuestionGroup} questionGroup={questionGroup} />
        </form>
        
        </section>
    )
}