import React from 'react'
import RadioButtonWrapper from './RadioButtonsWrapper'

const OptionsWrapper = (props) => {
    if (props.question.type === "radio") {
        return (
            <div className="options-wrapper">
                <RadioButtonWrapper 
                    question={props.question}
                    toChange={props.toChange}
                />
            </div>
        )
    } else if (props.question.type === "dropDown") {
        return (
            <div className="options-wrapper">
                put dropdownwrapper here
            </div>
        )
    } else {
        return (
            <div className="question">
                What kinda question is this?
            </div>
        )
    }
    
    return (
        <div className="options-wrapper">
            <RadioButtonWrapper 
                question={props.question}
                toChange={props.toChange}
            />
        </div>
    )
}

export default OptionsWrapper;