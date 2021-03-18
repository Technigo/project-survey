import React from 'react'

import Button from './Button'
import TextInput from './TextInput'


const FirstQuestion = (props) => {
  let {values, questionData, onInputResponse, onButtonResponse} = props
  // let value = values.[questionData.inputId]
  return (
    <form>

      <TextInput
      label={questionData.questionText}
      inputId={questionData.inputId} 
      value={questionData.reference}
      onInputResponse={onInputResponse}/>
      
      {/* <TextInput
      label="Name"
      inputId="name" 
      value={values.name}
      onInputResponse={onInputResponse}/> */}
      


      { questionData.reference  && 
        <Button 
        buttonType="next" 
        label="Next" 
        onButtonResponse={onButtonResponse} />
      }
      </form>
  )
}

export default FirstQuestion
