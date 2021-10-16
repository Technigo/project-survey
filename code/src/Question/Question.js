import React from 'react'
import './Question.css'

const Question = ({ question }) => {
    return (
        <div className="question_container">
            <h1 className="question_text">{question && question.question}</h1>
        </div>
    )
}


export default Question