import React from 'react'

const QuestionFour = ({radioInput2, handleRadioInputChange2, onStepChange, onStepBackChange}) => {
    const radioValues = ['zero gravity', 'higher mountains', 'something to block the sun']

    return (

        <section className="section" id="four">
        <div className="intro-text">
           <h2>If you could give the planet another feature what would it be? </h2>
       </div> 

       <form className="form">
            {radioValues.map(radioValue => (
            <label  htmlFor="radio-label" key={radioValue}>
                <input
                    className="radio-select"
                    type="radio" 
                    value={radioValue} 
                    onChange={handleRadioInputChange2 }
                    checked={radioInput2 === radioValue}
                    required
                />
                {radioValue}
            </label>
            ))}
        </form>
        <div className="buttons">
                <button type="submit" onClick={onStepBackChange} href="#two" className="btn">Go back</button>
                <button type="submit" onClick={onStepChange} href="#two" className="btn">Submit</button>
            </div>

        </section>
    )

}

export default QuestionFour