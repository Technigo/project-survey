import React from 'react'


export const QuizQuestions = (props) => {
    return (
        <section className="question-answer-container">
            <h2 className="question">{props.question}</h2>
            <div className="answer-container">
                {props.answers.map(answer => {
                    return (
                        <input 
                        type="button"
                        value={answer.answer}
                        className="quiz-answer-button"
                    />
                    )
                })}
            </div>
        </section>
        
    )
}