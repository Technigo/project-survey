import React from 'react'

const RadioButtons = ({ questionOneInput, onQuestionOneInputChange, onStepChange }) => {
    return (
        <div>
            <form>
                <label htmlFor="">Type your answer!
                    <input id="questionOneInput" type="radio" value={questionOneInput} onChange={onQuestionOneInputChange}></input>
                </label>

                <label htmlFor="">
                    <input id="questionOneInput" type="radio" value={questionOneInput} onChange={onQuestionOneInputChange}>
                    </input>
                </label>

                <label htmlFor="">
                    <input id="questionOneInput" type="radio" value={questionOneInput} onChange={onQuestionOneInputChange}>
                    </input>
                </label>

                <label htmlFor="">
                    <input id="questionOneInput" type="radio" value={questionOneInput} onChange={onQuestionOneInputChange}>
                    </input>
                </label>

                <button onClick={onStepChange}>Next Question!</button>
            </form>
        </div>
    )

}

export default RadioButtons