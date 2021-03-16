import React, { useState } from 'react'

import  NameInput from './components/NameInput'
import  RadioButtons from './components/RadioButtons'
import  DropDown  from './components/DropDown'
import  Result  from './components/Result'

const Form = () => {
  const [name,setName] = useState('')
  const [timeIntervals, setTimeIntervals] = useState('')

  return (
    
  
      <div>
        < NameInput />
        < RadioButtons />
        {/* /*< DropDown />
        < Result 
        /> */}
      </div>
    

  )

}

export default Form;
