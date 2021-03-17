import React, { useState } from 'react'

import  NameInput from './components/NameInput'
import  RadioButtons from './components/RadioButtons'
import  DropDown  from './components/DropDown'
import  Result  from './components/Result'

const Form = () => {
  const [name,setName] = useState('')
  const [timeInterval, setTimeInterval] = useState('')
  const [favorite, setFavorite]= useState('')
  const [done, setDone] = useState(false)

  const isResultComplete = () => {
    if (name === '') {
      return false
    }

    if (timeInterval === '') {
      return false
    }

    if (favorite === '') {
      return false
    }
    
    return true

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`name: ${name}`)
    console.log(`timeInterval: ${timeInterval}`)
    console.log(`favorite: ${favorite}`)
    setDone(isResultComplete()) 
    console.log(done)
  }


  return (
    <>
      {!done ? (

        <form className='form-container' onSubmit={handleSubmit}>
          < NameInput name={name} setName={setName} />
          < RadioButtons timeInterval={timeInterval} setTimeInterval={setTimeInterval} />
          < DropDown favorite={favorite} setFavorite={setFavorite} />
          <button className='submit-button' type='submit'> Submit! </button>
        
        </form>
      ):(< Result name={name} interval={timeInterval} favorite={favorite}/>)}

   </>
  )

}

export default Form;
