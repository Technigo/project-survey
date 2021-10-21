import React from 'react'

const SellotapeQuestion = ({sellotapeInput, onSellotapeInputChange, onstepChange}) => {
    return (
        <div className="container-bubbles">
         <img src="/assets/bubbles.jpg"></img>   
        <fieldset className="fieldset">
           <legend className="legend" >Questions by Bella + Bubbles</legend>
             <form className="form-container">
                <label className="label" htmlFor="sellotapeInput">How do they make Sellotape so sticky?</label>
                  <textarea 
                    className="textarea"
                    id="sellotapeInput"
                    value={sellotapeInput} 
                    onChange={onSellotapeInputChange}
                    rows="5" placeholder="Message"
                    >

                    </textarea>
                
                <button className="button" onClick = {onstepChange}>To the Overview</button>
            </form>
              
        </fieldset>
        </div>
        
    )
}
export default SellotapeQuestion