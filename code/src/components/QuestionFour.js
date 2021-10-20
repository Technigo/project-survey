import React from 'react'

const QuestionFour = ({radioInput, onRadioInputChange, onStepChange}) => {

    const radioValues = ['My family', 'My dog', 'My friends', 'All together']

    return (
    <section className="section">
        <div className="intro-text">
            <h2>What is gratitude for you? </h2>
            <p>For what in your life do you feel most grateful?</p>
        </div>
        <form className="form">
            {radioValues.map(radioValue => (
            <label className="radio-label" key={radioValue}>
                <input
                    className="radio-select"
                    type="radio" 
                    value={radioValue} 
                    onChange={onRadioInputChange}
                    checked={radioInput === radioValue}
                />
                {radioValue}
            </label>
            ))}
            <div className="buttons">
                <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
            </div>
        </form>
    </section>
    )
}


// {options.map((option) => (
//     <option key={option.value} value={option.value}>{option.label}</option>
export default QuestionFour

