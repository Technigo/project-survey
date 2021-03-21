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
                    source={props.source}
                />
            </div>
            <div className="button-label-wrapper">
                <RadioButton 
                    question={props.question}
                    toChange={props.toChange}
                    optionNumber={1}
                    source={props.source}
                />
            </div>
            <div className="button-label-wrapper">
                <RadioButton 
                    question={props.question}
                    toChange={props.toChange}
                    optionNumber={2}
                    source={props.source}
                />
            </div>
            <div className="button-label-wrapper">
                <RadioButton 
                    question={props.question}
                    toChange={props.toChange}
                    optionNumber={3}
                    source={props.source}
                />
            </div>
        </form>
    )
}

export default RadioButtonWrapper;