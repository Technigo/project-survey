import React from 'react';

const QuestionName = ({nameInput, onNameInputChange, onNextChange}) => {
    
    return (
        <div>
            <form id="question-name" className="form-box">
                <label htmlFor='name' label='name' className='question-text'>What is your name? </label>
                <input
                    className='input-box'
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
