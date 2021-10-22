import React from 'react'

const NameQuestion = ( {nameInput, onNameInputChange, onstepChange, onStepMinusChange}) => {

    return (
       <div className ="container-bella">
        <img src="/assets/bella.jpg"></img>
        <fieldset className="fieldset">
           <legend className="legend" >Questions by Bella + Bubbles</legend>
             <form className="form-container">
                <label className="label" htmlFor="nameInput">What is your name?</label>
                  <input 
                    className="input"
                    id="nameInput"
                    type="text" 
                    value={nameInput} 
                    onChange={onNameInputChange}
                    />
                
                <button className="button" onClick = {onstepChange}>Next Question </button>
                <button className="button" onClick = {onStepMinusChange}> Previous Question</button>
            </form>
              
        </fieldset>
       </div>
        
    )
}
export default NameQuestion