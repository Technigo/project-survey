import React from 'react'

import Button from './Button'
import TextInput from './TextInput'


const FirstQuestion = (props) => {
  let {values, handleResponse} = props
  return (
    <form>

      <TextInput
      label="First Name"
      inputId="firstName" 
      values={values}
      handleResponse={handleResponse}/>
      
      <TextInput
      label="Last Name"
      inputId="lastName" 
      values={values}
      handleResponse={handleResponse}/>

      <Button type="next" next={props.next} previous={props.previous}/>
    </form>
  )
}

export default FirstQuestion
