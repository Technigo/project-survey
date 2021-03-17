import React, { useState } from 'react'

import Form from './Form';

const Intro = () => {

    const [newQuestion, setNewQuestion] = useState(0)

    const onQuestionChange = () => {
        // setNewQuestion(Form)
        setNewQuestion(newQuestion +1)
    }

    return (
        <>
            <h1>Hello there</h1>
            <h2>Do you mind filling out my survey?</h2>
            <h3>Current question number: {newQuestion}</h3>
            <button 
                type="button"
                onClick={onQuestionChange}
            >
                Let's go!
            </button>
            
            {newQuestion > 0 && <Form/>}
                
        </>
    )
}

export default Intro;