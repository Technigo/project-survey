import React from 'react'

export const QuestionOne = ({name, setName}) => {
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <>
        <h2>What is your name?</h2>
        <input type="text" value={name} onChange={handleNameChange} />
        </>
    );
}

export default QuestionOne