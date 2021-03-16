import React, { useState } from 'react'

import  NameInput from './components/NameInput'
import  RadioButtons from './components/RadioButtons'
import  DropDown  from './components/DropDown'
import  Result  from './components/Result'

const Form = () => {
  const [name,setName] = useState('')
  const [timeIntervals, setTimeIntervals] = useState('')
  const [favorite, setFavorite]= useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    
  
      <form className='form-container' onSubmit={handleSubmit}>
        < NameInput />
        < RadioButtons />
        < DropDown />
        <button className='submit-button' type='submit'> Submit! </button>
        < Result 
        />  
      </form>
    

  )

}

export default Form;
