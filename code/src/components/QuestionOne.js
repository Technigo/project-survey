import React from 'react'

const QuestionOne = ({ questionOneInput, onQuestionOneInputChange, onStepChange }) => {
    return (
        <div className="question-one-container">
            <h2 className="question">If animals could talk, which would be the rudest?</h2>
            <form className="form-style">
                <label htmlFor="questionOneInput" className="form-label">Your answer</label>
                <input className="input-form" id="questionOneInput" type="input" value={questionOneInput} onChange={onQuestionOneInputChange} placeholder="Your Answer">
                </input>
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
        </div>
    )

}

export default QuestionOne