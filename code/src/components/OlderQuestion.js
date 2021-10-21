import React from 'react'

const OlderQuestion = ({olderInput, onOlderInputChange, onstepChange}) => {
    return (
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
                
                <button className="button" onClick = {onstepChange}>Next Question</button>
            </form>
              
        </fieldset>
    )
}

export default OlderQuestion