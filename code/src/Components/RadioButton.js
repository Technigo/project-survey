import React from 'react'
const RadioButton = (props) => {
    const howMuch = props.question.options[props.optionNumber].option
    return (
        <>
            <input
                name="radio" 
                id="radio-button" 
                type="radio"
                onChange={() => {props.toChange(howMuch)}}                       
            ></input>
            <label htmlFor="radio-button">
                {props.question.options[props.optionNumber].label}
            </label>
        </>
    )
}

export default RadioButton;