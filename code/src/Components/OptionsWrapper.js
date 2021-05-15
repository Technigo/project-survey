import React from 'react'
import RadioButtonWrapper from './RadioButtonsWrapper'
import DropDown from './DropDown'
import DropDownWrapper from './DropDownWrapper'
import TextInput from './TextInput'

const OptionsWrapper = (props) => {
  if (props.question.type === "radio") {
    return (
      <div className="options-wrapper">
        <RadioButtonWrapper
          question={props.question}
          toChange={props.toChange}
          source={props.source}
        />
      </div>
    )
  } else if (props.question.type === "dropDown") {
    return (
      <div className="options-wrapper">
        <div className="stat-questions-wrapper">
          <DropDown
            toChange={props.toChange}
            options={props.options}
            skillLevel={props.skillLevel}
            doesOverlap={props.doesOverlap}
          />
        </div>
      </div>
    )
  } else if (props.question.type === "text") {
    return (
      <div className="options-wrapper">
        <TextInput 
          backstoryAspect={props.backstoryAspect}
          onChange={props.onChange}
          placeholder={props.question.placeholder}
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