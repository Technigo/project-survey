import React from 'react'

import Select from './Select'
import Button from './Button'
import TextInput from './TextInput'

const Question = (props) => {
  let { values, question, onInputResponse, onButtonResponse } = props
  let value = values.[question.inputId]
  switch (question.type) {
    case 'textInput' :
      return (
        <>
          <h3 className="question-number">{values.step}</h3>
          <TextInput 
          label={question.questionText}
          value={value}
          placeholder={question.placeholder}
          inputId={question.inputId}
          values={values}
          onInputResponse={onInputResponse}/>
          
          {values.step !== 1 &&
            <Button 
            buttonValue="previous" 
            label="Previous" 
            onButtonResponse={onButtonResponse} />
          }

          {value && 
            <Button 
            buttonValue="next" 
            label="Next" 
            onButtonResponse={onButtonResponse} />
          }
        </>
      )
    case 'select' :
      return (
        <>
          <h3 className="question-number">{values.step}</h3>
          <Select 
          label={question.questionText}
          inputId={question.inputId} 
          values={values}
          onInputResponse={onInputResponse}
          options={question.options}/>
          
          {values.step !== 1 &&
            <Button 
            buttonValue="previous" 
            label="Previous" 
            onButtonResponse={onButtonResponse} />
          }

          {value && 
            <Button 
            buttonValue="next" 
            label="Next" 
            onButtonResponse={onButtonResponse} />
          }
        </>
      )
    default :
      return (
        <p>Oops!</p>
      )
  }
}

export default Question
