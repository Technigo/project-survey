import React, { useState } from 'react'
import SecondQuestion from './SecondQuestion'

const FirstQuestion = ({ onQuestionChange }) => {

    return (
        <form>
            <h1>Lets play a game...</h1>
            <button onClick={onQuestionChange}>um... ok?</button>
            <button onClick={onQuestionChange}>YES LETS DO THIS!</button>
        </form>
    )
}

export default FirstQuestion