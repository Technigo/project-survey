import React from "react"


const Question5 = ({ feelingInput, onFeelingInputChange, onStepChange }) => {

        return (
        <form className="form">
            <label htmlFor="feelingInput">5. Please rate your current Christmas feeling:</label>
            <p className="rate-description">(1 is bottom low and 5 is top)</p>
            <input
                className="slider"
                type="range" 
                id="feeling" 
                name="feeling" 
                min="1"
                max="5" 
                value={feelingInput}
                onChange={onFeelingInputChange}
            />
            <p className="rangeslider-value">{feelingInput}</p>
            
            <button onClick={onStepChange}>Submit</button>
        </form>

    )
}
        
export default Question5