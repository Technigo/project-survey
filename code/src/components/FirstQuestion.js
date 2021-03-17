import React from 'react'

import Button from './Button'
import TextInput from './TextInput'


const FirstQuestion = (props) => {
  let {values, onInputResponse, onButtonResponse} = props
  return (
    <form>

      <TextInput
      label="First Name"
      inputId="firstName" 
      values={values}
      onInputResponse={onInputResponse}/>
      
      <TextInput
      label="Last Name"
      inputId="lastName" 
      values={values}
      onInputResponse={onInputResponse}/>

      <Button 
      buttonType="next" 
      label="Next" 
      onButtonResponse={onButtonResponse} />
    </form>
  )
}

export default FirstQuestion
