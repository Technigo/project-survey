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
      values={values}
      onInputResponse={onInputResponse}/>
      
      <TextInput
      label="Title"
      inputId="title" 
      values={values}
      onInputResponse={onInputResponse}/>

      <Button 
      buttonType="previous" 
      label="Previous" 
      onButtonResponse={onButtonResponse} />
      <Button 
      buttonType="next" 
      label="Next" 
      onButtonResponse={onButtonResponse} />

    </form>
  )
}

export default SecondQuestion
