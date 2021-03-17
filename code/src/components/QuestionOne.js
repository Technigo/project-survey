// import React, { useState } from 'react'
import React from 'react'

const QuestionOne = ({ name, setName }) => {

    const onNameChange = (event) => {
        console.log(name)
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
            {/* <button type="button" onClick={onQuestionChange}>Next!</button> */}
        </>
    )
}

export default QuestionOne;