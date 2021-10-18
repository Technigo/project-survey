import React from 'react'

const QuestionThree = ({ questionThreeInput, onQuestionThreeInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="questionThreeInput">Type your answer!</label>
                <input id="questionThreeInput" type="text" value={questionThreeInput} onChange={onQuestionThreeInputChange}>
                </input>
                <button onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionThree