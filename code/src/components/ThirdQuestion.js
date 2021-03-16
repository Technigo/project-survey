import React from 'react'

import TextInput from './TextInput'
import Button from './Button'
import Select from './Select'

const ThirdQuestion = (props) => {
  let {values, handleResponse} = props
  return (
    <form>
      <Select
      label="Age"
      inputId="age" 
      values={values}
      handleResponse={handleResponse}
      options={['0-30', '31-50', '51-100']}/>

      <Button type="previous" next={props.next} previous={props.previous}/>
      <Button type="next" next={props.next} previous={props.previous}/>

    </form>
  )
}

export default ThirdQuestion
