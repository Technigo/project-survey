import React from 'react'

const QuestionOne = ({ questionOneInput, onQuestionOneInputChange, onStepChange }) => {
    return (
        <div>
            <div className="progress-bar-container">
                <label htmlFor="survey">Survey progress: </label>
                <progress className="progress-bar" id="survey" value="2" max="6"></progress>
            </div>

            <div className="question-one-container">
                <h2 className="question">If animals could talk, which would be the rudest?</h2>
                <form className="form-style">
                    <label htmlFor="questionOneInput" className="form-label">Your answer</label>
                    <input className="input-form" id="questionOneInput" type="text" value={questionOneInput} onChange={onQuestionOneInputChange} placeholder="Your Answer">
                    </input>
                </form>
                <button className="button-next" type="submit" onClick={onStepChange}>Next</button>
            </div>
        </div>
    )

}

export default QuestionOne