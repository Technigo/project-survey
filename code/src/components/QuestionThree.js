import React from 'react'

const QuestionThree = ({ questionThreeInput, onQuestionThreeInputChange, onStepChange }) => {
    return (
        <div className="question-three-container">
            <form className="question-three">
                <label htmlFor="questionThreeInput">If you could be a fly on the wall, who would you want to listen in on?</label>
                <input className="input-form" id="questionThreeInput" type="text" value={questionThreeInput} onChange={onQuestionThreeInputChange} required>
                </input>
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
        </div>
    )

}

export default QuestionThree