import React from 'react';

const QuestionName = ({nameInput, onNameInputChange, onNextChange}) => {
    
    return (
        <div className="question-box">
            <h2>Question 1</h2>
            <form id="question-name" className="form">
                <label htmlFor='name' label='name'>What's your name? </label>
                <input
                    id='name'
                    type='text'
                    value={nameInput}
                    onChange={onNameInputChange}
                />
                <button onClick={onNextChange}>
                    Next
                </button>
            </form>
        </div>
    )

}

export default QuestionName
