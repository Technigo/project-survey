import React from 'react'

const QuestionFour = ({ questionFourInput, onQuestionFourInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="questionFourInput"> If animals could talk, which would be the rudest?</label>
                <input id="questionFourInput" type="text" value={questionFourInput} onChange={onQuestionFourInputChange} required>
                </input>
                <button className="button-next" type="submit" onClick={onStepChange}>Next question!</button>
            </form>
        </div>
    )

}

export default QuestionFour