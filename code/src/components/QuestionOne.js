import React from 'react'

const QuestionOne = ({ questionOneInput, onQuestionOneInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="questionOneInput"> If animals could talk, which would be the rudest?</label>
                <input id="questionOneInput" type="text" value={questionOneInput} onChange={onQuestionOneInputChange}>
                </input>
                <button onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionOne