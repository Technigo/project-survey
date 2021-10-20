import React from 'react'

const QuestionFour = ({radioInput, onRadioInputChange, onStepChange}) => {

    const radioValues = ['My family', 'My dog', 'My friends', 'All together']

    return (
    <div>
        <h2>What is gratitude for you? </h2>
        <p>For what in your life do you feel most grateful?</p>
        <form className="form">
            {radioValues.map(radioValue => (
            <label key={radioValue}>
                <input
                    type="radio" 
                    value={radioValue} 
                    onChange={onRadioInputChange}
                    checked={radioInput === radioValue}
                />
                {radioValue}
            </label>
            ))}
            <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
        </form>
    </div>
    )
}


// {options.map((option) => (
//     <option key={option.value} value={option.value}>{option.label}</option>
export default QuestionFour

