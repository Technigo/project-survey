import React from 'react'

const QuestionFive = ({ questionFiveInput, onQuestionFiveInputChange, onStepChange }) => {
    return (
        <div>
            <div className="progress-bar-container">
                <label htmlFor="survey">Survey progress: </label>
                <progress className="progress-bar" id="survey" value="6" max="6"></progress>
            </div>

            <div className="question-five-container">
                <h2 className="question">On a scale from 1 to 5, how hungry are you right now?</h2>
                <div className="slider-container">
                    <label htmlFor="questionsFiveInput"></label>
                    <input className="slider" id="questionFiveInput" type="range" min="1" max="5" value={questionFiveInput} onChange={onQuestionFiveInputChange}>
                    </input>
                    <div className="slider-values-container">
                        <span>1</span>
                        <span>3</span>
                        <span>5</span>
                    </div>
                </div>
                <button className="button-next" type="submit" onClick={onStepChange}>Next</button>
            </div>
        </div>
    )

}

export default QuestionFive