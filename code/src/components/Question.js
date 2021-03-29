import React from 'react'

import Select from './Select'
import Button from './Button'
import TextInput from './TextInput'
import Checkboxes from './Checkboxes'
import RadioButtons from './RadioButtons'

const Question = (props) => {
  
  let { values, step, question, onInputResponse, onEnterResponse, onButtonResponse } = props
  let value = values[question.inputId]
  const showNext = (value) => {
    return value || !question.required
  }

  switch (question.type) {
    case 'textInput' :
      return (
        <>
          <h3 className="question-number">{step}</h3>
          <TextInput 
          label={question.questionText}
          value={value}
          placeholder={question.placeholder}
          inputId={question.inputId}
          values={values}
          onInputResponse={onInputResponse}
          onEnterResponse={onEnterResponse}
          onButtonResponse={onButtonResponse}
          />
          
          {step !== 1 &&
            <Button 
            buttonValue="previous" 
            label="Previous" 
            onButtonResponse={onButtonResponse} />
          }

          {showNext(value) && 
            <Button 
            buttonValue="next" 
            label="Next" 
            onButtonResponse={onButtonResponse}
            onEnterResponse={onEnterResponse}
            
            />
          }
        </>
      )
    case 'select' :
      return (
        <>
          <h3 className="question-number">{step}</h3>
          <Select 
          label={question.questionText}
          inputId={question.inputId} 
          values={values}
          placeholder={question.placeholder}
          onInputResponse={onInputResponse}
          options={question.options}/>
          
          {step !== 1 &&
            <Button 
            buttonValue="previous" 
            label="Previous" 
            onButtonResponse={onButtonResponse} />
          }

          {showNext(value) && 
            <Button 
            buttonValue="next" 
            label="Next" 
            onButtonResponse={onButtonResponse}
             />
          }
        </>
      )
    case 'checkboxes' :
      return (
        <>
          <h3 className="question-number">{step}</h3>
          <Checkboxes 
          label={question.questionText}
          inputId={question.inputId} 
          values={values}
          placeholder={question.placeholder}
          onInputResponse={onInputResponse}
          options={question.options}/>
          
          {step !== 1 &&
            <Button 
            buttonValue="previous" 
            label="Previous" 
            onButtonResponse={onButtonResponse} />
          }

          {showNext(value.length) && 
            <Button 
            buttonValue="next" 
            label="Next" 
            onButtonResponse={onButtonResponse} />
          }
        </>
      )
    case 'radio' :
      return (
        <>
          <h3 className="question-number">{step}</h3>
          <RadioButtons 
          label={question.questionText}
          inputId={question.inputId} 
          values={values}
          placeholder={question.placeholder}
          onInputResponse={onInputResponse}
          options={question.options}/>
          
          {step !== 1 &&
            <Button 
            buttonValue="previous" 
            label="Previous" 
            onButtonResponse={onButtonResponse} />
          }

          {showNext(value.length) && 
            <Button 
            buttonValue="next" 
            label="Next" 
            onButtonResponse={onButtonResponse} />
          }
        </>
      )
    default :
    return (
      <p>Error! question.type is invalid </p>
    )
  }
}

export default Question
