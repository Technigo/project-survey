import React from 'react'
import RadioButtonWrapper from './RadioButtonsWrapper'
import DropDown from './DropDown'

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
                <DropDown 
                    question={props.question}
                    bestAt = {props.bestAt}
                    onBestAtChange = {props.onBestAtChange}
                    nextToBestAt = {props.nextToBestAt}
                    onNextToBestAtChange = {props.onNextToBestAtChange}
                    worstAt = {props.worstAt}
                    onWorstAtChange = {props.onWorstAtChange}
                />
            </div>
        )
    } else {
        return (
            <div className="question">
                What kinda question is this?
            </div>
        )
    }
}

export default OptionsWrapper;