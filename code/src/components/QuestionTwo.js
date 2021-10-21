import React from 'react'

const QuestionTwo = ({ questionTwoInput, onQuestionTwoInputChange, onStepChange }) => {
    return (
        <div>
            <div className="progress-bar-container">
                <label htmlFor="survey">Survey progress: </label>
                <progress className="progress-bar" id="survey" value="3" max="6"></progress>
            </div>

            <div className="question-two-container">
                <h2 className="question">Is cereal soup?</h2>
                <form className="select-style">
                    <select className="select-form" onChange={onQuestionTwoInputChange} value={questionTwoInput}>
                        <option value="DEFAULT" disabled>Choose side!</option>
                        <option value='definitely a'>Of course it is!</option>
                        <option value='absolutely not a'>Absolutely not!</option>
                    </select>
                </form>
                <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
            </div>
        </div>
    )

}

export default QuestionTwo