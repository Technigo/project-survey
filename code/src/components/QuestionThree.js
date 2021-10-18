import React from 'react'

const QuestionThree = ({ questionThreeInput, onQuestionThreeInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="questionThreeInput">What sport would be the funniest to add a mandatory amount of alcohol to?</label>
                <input id="questionThreeInput" type="text" value={questionThreeInput} onChange={onQuestionThreeInputChange} required>
                </input>
                <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionThree