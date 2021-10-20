import React from 'react'

const QuestionTwo = ({ questionTwoInput, onQuestionTwoInputChange, onStepChange }) => {
    return (
        <div className="question-two-container">
            <h2 className="question">Is cereal soup?</h2>
            <form className="form-style">
                <select className="select-form" onChange={onQuestionTwoInputChange} value={questionTwoInput} required>
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