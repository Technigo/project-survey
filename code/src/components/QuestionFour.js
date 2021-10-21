import React from 'react'

const QuestionFour = ({radioInput, onRadioInputChange, onStepChange}) => {

    const radioValues = ['Your family', 'Your dog', 'Your friends', 'All together']

    return (
    <section id="four" className="section">
        <div className="intro-text">
            <label>LOVE IS ALL YOU NEED</label>
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
                <button onClick={onStepChange} id="#summery" className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
            </div>
        </form>
    </section>
    )
}


export default QuestionFour

