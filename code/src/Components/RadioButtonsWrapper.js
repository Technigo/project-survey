import React from 'react'
import RadioButton from './RadioButton'

const RadioButtonWrapper = (props) => {
    return (
        <form className="radio-buttons-wrapper">
            <div className="button-label-wrapper">
                <RadioButton 
                    question={props.question}
                    toChange={props.toChange}
                    optionNumber={0}
                />
            </div>
            <div className="button-label-wrapper">
                <RadioButton 
                    question={props.question}
                    toChange={props.toChange}
                    optionNumber={1}
                />
            </div>
            <div className="button-label-wrapper">
                <RadioButton 
                    question={props.question}
                    toChange={props.toChange}
                    optionNumber={2}
                />
            </div>
        </form>
    )
}

export default RadioButtonWrapper;