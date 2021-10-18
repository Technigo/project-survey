import React from 'react'

const QuestionTwo = ({ questionTwoInput, onQuestionTwoInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="questionTwoInput">Is cereal soup?</label>
                <input id="questionTwoInput" type="text" value={questionTwoInput} onChange={onQuestionTwoInputChange}>
                </input>
                <button onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionTwo