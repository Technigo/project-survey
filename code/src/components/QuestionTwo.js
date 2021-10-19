import React from 'react'

const QuestionTwo = ({ questionTwoInput, onQuestionTwoInputChange, onStepChange }) => {
    return (
        <div className="question-two-container">
            <form className="question-two">Is cereal soup?
                <select className="input-form" onChange={onQuestionTwoInputChange} value={questionTwoInput} required>
                    <option value=''></option>
                    <option value='Of course it is!'>Of course it is!</option>
                    <option value='Absolutely not!'>Absolutely not!</option>
                </select>
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
        </div>
    )

}

export default QuestionTwo