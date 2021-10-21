import React from 'react'

const QuestionFour = ({ questionFourInput, onQuestionFourInputChange, onStepChange }) => {
    return (
        <div>
            <div className="progress-bar-container">
                <label htmlFor="survey">Survey progress: </label>
                <progress className="progress-bar" id="survey" value="5" max="6"></progress>
            </div>

            <div className="question-four-container">
                <h2 className="question">What superhero/villain would make the best therapist?</h2>
                <form className="form-style">
                    <label htmlFor="questionFourInput" className="form-label">Your answer</label>
                    <input className="input-form" id="questionFourInput" type="input" value={questionFourInput} onChange={onQuestionFourInputChange} placeholder="Your Answer">
                    </input>
                </form>
                <button className="button-next" type="submit" onClick={onStepChange}>Next</button>
            </div>
        </div>
    )

}

export default QuestionFour