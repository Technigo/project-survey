import React from 'react'

const OlderQuestion = ({olderInput, onOlderInputChange, onStepChange, onStepMinusChange}) => {
    return (
        <div className="container-bella">
         <img src="/assets/bella.jpg" alt = "child who asked the question"/>  
        <fieldset className="fieldset">
           <legend className="legend" >Questions by Bella + Bubbles</legend>
             <form className="form-container">
                <label className="label" htmlFor="olderInput">What do you want to be when you grow up?</label>
                  <input 
                    className="input"
                    id="olderInput"
                    type="text" 
                    value={olderInput} 
                    onChange={onOlderInputChange}
                    />
                
                <button className="button" onClick = {onStepChange}>Next Question</button>
                <button className="button" onClick = {onStepMinusChange}> Previous Question</button>
            </form>
              
        </fieldset>
        </div>
        
    )
}

export default OlderQuestion