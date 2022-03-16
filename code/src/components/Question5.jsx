import React from "react"


const Question5 = ({ vibesInput, onVibesInputChange, onStepChange }) => {

        return (
        <form className="form">
            <label htmlFor="vibesInput">5. Amount of GOOD VIBES right now:</label>
            <p className="rate-description">(1 lowest, 27 highest)</p>
            <input
                className="slider"
                type="range" 
                id="vibes" 
                name="vibes" 
                min="1"
                max="27" 
                value={vibesInput}
                onChange={onVibesInputChange}
            />
            <p className="rangeslider-value">{vibesInput}</p>
            
            <button onClick={onStepChange}>Submit</button>
        </form>

    )
}
        
export default Question5