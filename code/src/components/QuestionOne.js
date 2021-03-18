import React, { useState } from 'react'
// import React from 'react'
import  Button from './Button'
import QuestionTwo from './QuestionTwo'

const QuestionOne = ({ name, setName }) => {

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <div>
                <h2>First Question</h2>
                <p>What's your name?</p>
            </div>
            <div>
                <label htmlFor="name"></label>
                <input 
                    name="name"
                    id={name}
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Type your name"
                />
            </div>
            <p>Your name: {name}</p>
        
        </>
    )
}

export default QuestionOne;