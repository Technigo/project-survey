import React from 'react'

const QuestionThree = ({ questionThreeInput, onQuestionThreeInputChange, onStepChange }) => {
    return (
        <div>
            <div className="progress-bar-container">
                <label htmlfor="survey">Survey progress: </label>
                <progress className="progress-bar" id="survey" value="4" max="5"></progress>
            </div>

            <div className="question-three-container">
                <h2 className="question">If you could be a fly on the wall, who would you want to listen in on?</h2>
                <form className="form-style">
                    <label htmlFor="questionThreeInput" className="form-label">Your answer</label>
                    <input className="input-form" id="questionThreeInput" type="input" value={questionThreeInput} onChange={onQuestionThreeInputChange} placeholder="Your Answer">
                    </input>
                </form>
                <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
            </div>
        </div>
    )

}

export default QuestionThree