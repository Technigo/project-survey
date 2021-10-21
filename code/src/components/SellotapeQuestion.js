import React from 'react'

const SellotapeQuestion = ({sellotapeInput, onSellotapeInputChange, onstepChange}) => {
    return (
        <fieldset className="fieldset">
           <legend className="legend" >Questions by Bella + Bubbles</legend>
             <form className="form-container">
                <label className="label" htmlFor="sellotapeInput">How do they make Sellotape so sticky?</label>
                  <textarea 
                    className="input"
                    id="sellotapeInput"
                    value={sellotapeInput} 
                    onChange={onSellotapeInputChange}
                    rows="5" placeholder="Message"
                    >

                    </textarea>
                
                <button className="button" onClick = {onstepChange}>Next Question</button>
            </form>
              
        </fieldset>
    )
}
export default SellotapeQuestion