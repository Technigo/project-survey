import React from 'react'

import Button from './Button'
import Select from './Select'

const ThirdQuestion = (props) => {
  let {values, onInputResponse, onButtonResponse} = props
  return (
    <form>
      <Select
      label="Age"
      inputId="age" 
      values={values}
      onInputResponse={onInputResponse}
      options={['0-30', '31-50', '51-100']}/>

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

export default ThirdQuestion
