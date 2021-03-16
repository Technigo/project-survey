import React from 'react'

import TextInput from './TextInput'
import Button from './Button'

const SecondQuestion = (props) => {
  let {values, handleResponse} = props
  return (
    <form>
      <TextInput
      label="Company"
      inputId="company" 
      values={values}
      handleResponse={handleResponse}/>
      
      <TextInput
      label="Title"
      inputId="title" 
      values={values}
      handleResponse={handleResponse}/>

      <Button type="previous" next={props.next} previous={props.previous}/>
      <Button type="next" next={props.next} previous={props.previous}/>

    </form>
  )
}

export default SecondQuestion
