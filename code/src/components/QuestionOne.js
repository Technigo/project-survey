import React, { useState } from 'react'

const QuestionOne = () => {
    
    const [name, setName] = useState('');

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
                    id="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Type your name"
                />
                <h3>Current name: {name}</h3>
            </div>
        </>
    )
}

export default QuestionOne;