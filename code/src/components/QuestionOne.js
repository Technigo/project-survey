import React from 'react'

const QuestionOne = ({ questionOneInput, onQuestionOneInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="questionOneInput">Type your answer!</label>
                <input id="questionOneInput" type="text" value={questionOneInput} onChange={onQuestionOneInputChange}>
                </input>
                <button onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionOne