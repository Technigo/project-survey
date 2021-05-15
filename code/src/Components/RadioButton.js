import React from 'react'
const RadioButton = (props) => {
    const buttonValue = props.question.options[props.optionNumber].value
    return (
        <>
            <input
                name="radio" 
                id={`radio-button-${props.optionNumber}`} 
                type="radio"
                checked={props.source === buttonValue}
                onChange={() => {props.toChange(buttonValue)}}                       
            ></input>
            <label htmlFor={`radio-button-${props.optionNumber}`}>
                {props.question.options[props.optionNumber].label}
            </label>
        </>
    )
}

export default RadioButton;