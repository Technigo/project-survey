import React from 'react'

const QuestionTwo = ({nameInput, selectValue, onSelectOptionChange, onStepChange, onStepBackChange}) => {
    const options = [
        {
            label: "Choose one option",
            value: "Choose one option",
          },
        
        ]
    return (

        <section className="section" id="two">
        <div className="intro-text">
           <h2>First off {nameInput}, how do you use our planet?</h2>
       </div> 

        <form className='form'>
            <label htmlFor='select'>I </label>
           
        <select
        id="select-option"
        onChange={onSelectOptionChange}
        value={selectValue}
        >
        {options.map((option) => (
         <option key={option.value} value={option.value}>{option.label}</option>   
        ))}
        </select>
        </form>
        <div className="buttons">
                <button type="submit" onClick={onStepBackChange} href="#two" className="btn">Go back!</button>
                <button type="submit" onClick={onStepChange} href="#two" className="btn">Next please!</button>
            </div>

        </section>
    )

}

export default QuestionTwo