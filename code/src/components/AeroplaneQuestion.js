import React from 'react'

const AeroplaneQuestion = ({onAeroplaneInputChange, onstepChange}) =>{

    return(
        <form>
            <div className="radioRow">
                <h2>Can you make an aeroplane out of paper?</h2>
                <label className= "radiobutton-container"htmlFor="aeroplaneInput">Yes
                    <input 
                        id="aeroplaneInput"
                        type="radio" 
                        value="Yes"
                        onChange={onAeroplaneInputChange}
                        className="radio"/>
                </label>

                <label className= "radiobutton-container"htmlFor="aeroplaneInput">No
                    <input 
                        id="aeroplaneInput"
                        type="radio" 
                        value="No"
                        onChange={onAeroplaneInputChange}
                        className="radio"/>
                </label>
            </div>
         
        <button onClick = {onstepChange}>Next Question</button>
        </form>
    )
}
export default AeroplaneQuestion