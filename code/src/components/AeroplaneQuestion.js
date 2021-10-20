import React from 'react'

const AeroplaneQuestion = ({onAeroplaneInputChange, onstepChange}) =>{

    return(
        <fieldset className="fieldset">
           <legend className="legend" >Questions by Bella + Bubbles</legend>
            <form className="form-container">
            <div className="radioRow">
                <h2>Can you make an aeroplane out of paper?</h2>
                <label className= "radiobutton-container"htmlFor="aeroplaneInput">Yes
                    <input 
                        className="input"
                        id="aeroplaneInput"
                        type="radio" 
                        value="Yes"
                        onChange={onAeroplaneInputChange}
                        className="radio"/>
                </label>

                <label className= "radiobutton-container"htmlFor="aeroplaneInput">No
                    <input 
                        className="input"
                        id="aeroplaneInput"
                        type="radio" 
                        value="No"
                        onChange={onAeroplaneInputChange}
                        /*className="radio"*//>
                </label>
            </div>
         
        <button className="button" onClick = {onstepChange}>Next Question</button>
        </form>
        </fieldset>
    )
}
export default AeroplaneQuestion