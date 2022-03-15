import React from 'react'

export const SecondQuestion = (props) => {
    const {positionInput, onPositionInputChange, onStepChange, onStepBackChange} = props
    return(
        <div>
            <label htmlFor="positionInput">Type your surname</label>
            <select 
                id="positionInput"
                value={positionInput}
                onChange={onPositionInputChange}>
                <option value="">Select position:</option>
                <option value="frontend developer">frontend developer</option>
                <option value="backend developer">backend developer</option>
                <option value="fullstack developer">fullstack developer</option>
            </select>
            <button onClick={onStepChange}>Next question</button>
            <button onClick={onStepBackChange}>Previous question</button>
        </div>
      )
} 