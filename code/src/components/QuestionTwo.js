import React from 'react'

const QuestionTwo = ({nameInput, selectValue, handleSelectOptionChange, onStepChange, onStepBackChange}) => {
    const options = [
        {
            label: "Choose one option",
            value: "Choose one option",
          },
          {
            label: "to fill my every need",
            value: "as a piece of garbage",
          },
          {
            label: "to be here for future generations",
            value: "with a conscience",
          },
          {
            label: "to each its own, that's private",
            value: "for 'privat' probably dirty buisness",
          }
        ]
    return (

        <section className="section" id="two">
        <div className="intro-text">
           <h2>First off {nameInput}, how do you use our planet?</h2>
       </div> 

        <form className='form'>
            <label htmlFor='select'></label>
           
        <select
        id="select-option"
        value={selectValue} 
        onChange={handleSelectOptionChange} 
        >
        {options.map((option) => (
         <option key={option.value} value={option.value}>{option.label}</option>   
        ))}
        </select>
        </form>
        <div className="buttons">
        <button type="submit" onClick={onStepBackChange} href="#two" className="btn">Go back</button>
                <button type="submit" onClick={onStepChange} href="#two" className="btn">Next</button>
            </div>

        </section>
    )

}

export default QuestionTwo