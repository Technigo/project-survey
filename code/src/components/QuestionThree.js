import React from 'react'

const QuestionThree = ({radioInput, handleRadioInputChange, onStepChange, onStepBackChange}) => {
    const radioValues = ['by car', 'by foot', 'with something really fast']

    return (

        <section className="section" id="three">
        <div className="intro-text">
           <h2>How do you prefer to travel</h2>
       </div> 

       <form className="form">
            {radioValues.map(radioValue => (
            <label htmlFor="radio-label" key={radioValue}>
                <input
                    className="radio-select"
                    type="radio" 
                    value={radioValue} 
                    onChange={handleRadioInputChange}
                    checked={radioInput === radioValue}
                />
                {radioValue}
            </label>
            ))}
        </form>
        <div className="buttons">
                <button type="submit" onClick={onStepBackChange} href="#two" className="btn">Go back</button>
                <button type="submit" onClick={onStepChange} href="#two" className="btn">Next</button>
            </div>

        </section>
    )

}

export default QuestionThree