import React from 'react'

const AeroplaneQuestion = ({onAeroplaneInputChange, onstepChange}) =>{

    return(
       <div className="container-bubbles">
           <img src="/assets/bubbles.jpg"></img>
            <fieldset className="fieldset">
           <legend className="legend" >Questions by Bella + Bubbles</legend>
            <form className="form-container">
                <div className="radioColumn">
                <h2>Can you make an aeroplane out of paper?</h2>
                <div className="radioRow"> 
                <label className= "radiobutton-label"htmlFor="aeroplaneInput">Yes
                    <input 
                        id="aeroplaneInput"
                        type="radio" 
                        value="Yes"
                        onChange={onAeroplaneInputChange}
                        className="radio"/>
                        <span className="custom-radio"></span>
                </label>

                <label className="radiobutton-label" htmlFor="aeroplaneInput">No
                    <input 
                        id="aeroplaneInput"
                        type="radio" 
                        value="No"
                        onChange={onAeroplaneInputChange}
                        className="radio"/>
                    <span className="custom-radio"></span>
                </label>
            </div>  
                </div>
                
         
        <button className="button" onClick = {onstepChange}>Next Question</button>
        </form>
        </fieldset>
       </div>
    )
}
export default AeroplaneQuestion