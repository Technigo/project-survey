import React from 'react'
const RadioButton = (props) => {
    const buttonValue = props.question.options[props.optionNumber].value
    return (
        <>
            <input
                name="radio" 
                id="radio-button" 
                type="radio"
                onChange={() => {props.toChange(buttonValue)}}                       
            ></input>
            <label htmlFor="radio-button">
                {props.question.options[props.optionNumber].label}
            </label>
        </>
    )
}

export default RadioButton;