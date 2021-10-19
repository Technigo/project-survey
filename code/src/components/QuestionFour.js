import React from 'react'

const QuestionFour = ({ questionFourInput, onQuestionFourInputChange, onStepChange }) => {
    return (
        <div className="question-four-container">
            <form className="question-four">
                <label htmlFor="questionFourInput"> What superhero/villain would make the best therapist?</label>
                <input className="input-form" id="questionFourInput" type="text" value={questionFourInput} onChange={onQuestionFourInputChange} required>
                </input>
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
        </div>
    )

}

export default QuestionFour