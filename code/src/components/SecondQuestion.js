import React from 'react'

import TextInput from './TextInput'
import Button from './Button'

const SecondQuestion = (props) => {
  let {values, onInputResponse, onButtonResponse} = props
  return (
    <form>
      <TextInput
      label="Company"
      inputId="company" 
      value={values.company}
      onInputResponse={onInputResponse}/>
      
      <TextInput
      label="Title"
      inputId="title" 
      value={values.title}
      onInputResponse={onInputResponse}/>

      <Button 
      buttonType="previous" 
      label="Previous" 
      onButtonResponse={onButtonResponse} />
      {values.company && values.title && 
        <Button 
        buttonType="next" 
        label="Next" 
        onButtonResponse={onButtonResponse} />
      }
    </form>
  )
}

export default SecondQuestion
