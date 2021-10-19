import React from 'react'

const QuestionOne = ({ questionOneInput, onQuestionOneInputChange, onStepChange }) => {
    return (
        <div className="question-one-container">
            <form className="question-one">
                <label htmlFor="questionOneInput"> If animals could talk, which would be the rudest?</label>
                <input className="input-form" id="questionOneInput" type="text" value={questionOneInput} onChange={onQuestionOneInputChange} required>
                </input>
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
        </div>
    )

}

export default QuestionOne