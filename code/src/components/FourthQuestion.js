import React from 'react'

import Button from './Button'
import Select from './Select'

const FourthQuestion = (props) => {
  let {values, onInputResponse, onButtonResponse} = props
  return (
    <form>
      {/* <Select
      label="Age"
      inputId="age" 
      value={values.age}
      // values={values}
      onInputResponse={onInputResponse}
      options={['0-30', '31-50', '51-100']}/>

      <Button 
      buttonType="previous" 
      label="Previous" 
      onButtonResponse={onButtonResponse} />
      
      {values.age && 
        <Button 
        buttonType="next" 
        label="Next" 
        onButtonResponse={onButtonResponse} />
      } */}
    </form>
  )
}

export default FourthQuestion
