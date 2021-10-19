import React from 'react'

const QuestionFour = ({radioInput, onRadioInputChange, onStepChange}) => {

    const radioValues = ['Number one', 'Number two', 'Number three']

    return (
    <div>
        <h2>Heading for step four</h2>
        <p>This is the fourth question?</p>
        <form className="form">
            <label htmlFor="surnameInput">Choose fruit of your taste</label>
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

