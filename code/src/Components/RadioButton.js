import React from 'react'
const RadioButton = (props) => {
    const howMuch = props.question.options[props.optionNumber].optionValue
    return (
        <>
            <input
                name="rob" 
                id="radio-button" 
                type="radio"
                onChange={() => {props.toChange(howMuch)}}                       
            ></input>
            <label htmlFor="radio-button">
                {props.question.options[props.optionNumber].optionLabel}
            </label>
        </>
    )
}

export default RadioButton;