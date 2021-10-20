import React from 'react'

const QuestionFour = ({ questionFourInput, onQuestionFourInputChange, onStepChange }) => {
    return (
        <div className="question-four-container">
            <h2 className="question">What superhero/villain would make the best therapist?</h2>
            <form className="form-style">
                <label htmlFor="questionFourInput" className="form-label">Your answer</label>
                <input className="input-form" id="questionFourInput" type="input" value={questionFourInput} onChange={onQuestionFourInputChange} placeholder="Your Answer">
                </input>
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
        </div>
    )

}

export default QuestionFour