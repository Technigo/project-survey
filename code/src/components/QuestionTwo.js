import React from 'react'

const QuestionTwo = ({ questionTwoInput, onQuestionTwoInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <select onChange={onQuestionTwoInputChange} value={questionTwoInput}>
                    <option value=''>Is cereal soup?</option>
                    <option value='yes'>Of course it is!</option>
                    <option value='no'>Absolutely not!</option>
                </select>
                <button onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionTwo